import { ANONYMOUS_USER_ID } from "app/metadata";
import { NextRequest, NextResponse } from "next/server";
import type { ListResponse, RoomCardContent } from "types/api";
import type { RoomContent, UserContent } from "types/microcms";
import { fetchContents } from "utils/microCMS";

const anonymousUser: UserContent = {
  id: ANONYMOUS_USER_ID,
  alias_id: ANONYMOUS_USER_ID,
  name: ANONYMOUS_USER_ID,
  createdAt: "2000-01-01T00:00:00.000Z",
  updatedAt: "2000-01-01T00:00:00.000Z",
  publishedAt: "2000-01-01T00:00:00.000Z",
  revisedAt: "2000-01-01T00:00:00.000Z",
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get("limit") || "10");
  const offset = Number(searchParams.get("offset") || "0");
  const orders = searchParams.get("orders") || "-publishedAt"; // desc
  const filters = searchParams.get("filters") || undefined;

  const rooms = await fetchContents<RoomContent>(
    "rooms",
    { orders, limit, offset, filters },
    { next: { revalidate: 60 } },
  );

  const userIds = [
    ANONYMOUS_USER_ID,
    ...rooms.contents.map((content) => content.created_by_user_id),
  ];
  const users = await fetchContents<UserContent>(
    "users",
    { ids: userIds.join(",") },
    { next: { revalidate: 60 } },
  );

  const contents: RoomCardContent[] = rooms.contents.map((room) => {
    const user = users.contents.find(
      (user) => user.id === room.created_by_user_id,
    );
    return {
      room,
      user: user || anonymousUser,
    };
  });

  const res: ListResponse<RoomCardContent> = {
    contents,
    totalCount: rooms.totalCount,
    limit: rooms.limit,
    offset: rooms.offset,
  };
  return NextResponse.json(res);
}
