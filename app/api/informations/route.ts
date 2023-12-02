import { NextRequest, NextResponse } from "next/server";
import type { ListResponse } from "types/api";
import type { InformationContent } from "types/microcms";
import { fetchContents } from "utils/microCMS";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get("limit") || "10");
  const offset = Number(searchParams.get("offset") || "0");
  const orders = searchParams.get("orders") || "-publishedAt"; // desc
  const filters = searchParams.get("filters") || undefined;

  const data = await fetchContents<InformationContent>(
    "informations",
    { orders, limit, offset, filters },
    { next: { revalidate: 60 } },
  );

  const res: ListResponse<InformationContent> = data;
  return NextResponse.json(res);
}
