import { NextRequest, NextResponse } from "next/server";
import { fetchContents } from "utils/microCMS";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "0", 10);
  const limit = parseInt(searchParams.get("palimitge") || "10", 10);
  const orders = searchParams.get("orders") || "-publishedAt"; // desc

  const offset = limit * page;
  const contents = await fetchContents(
    "informations",
    { orders, limit, offset },
    { next: { revalidate: 60 } },
  );

  return NextResponse.json({
    ...contents,
    fetchedAt: new Date().toISOString(),
  });
}
