import { ANONYMOUS_USER_ID } from "app/metadata";
import { NextRequest, NextResponse } from "next/server";
import type { RoomContent, UserContent } from "types/microcms";
import { fetchContents } from "utils/microCMS";

export interface ListResponse<T> {
  contents: T[];
  totalCount: number;
  limit: number;
  offset: number;
}

export interface Content {
  room: RoomContent;
  user: UserContent;
}

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
  const page = Number(searchParams.get("page") || "0");
  const limit = Number(searchParams.get("limit") || "10");
  const orders = searchParams.get("orders") || "-publishedAt"; // desc
  const offset = limit * page;

  const rooms = await fetchContents<RoomContent>(
    "rooms",
    { orders, limit, offset },
    { next: { revalidate: 60 } },
  );

  const userIds = [
    ANONYMOUS_USER_ID,
    ...rooms.contents.map((content) => content.created_by_user_id),
  ];
  const users = await fetchContents<UserContent>(
    "users",
    { ids: userIds.join(",") },
    { next: { revalidate: 3600 } },
  );

  const contents: Content[] = rooms.contents.map((room) => {
    const user = users.contents.find(
      (user) => user.id === room.created_by_user_id,
    );
    return {
      room,
      user: user || anonymousUser,
    };
  });

  const res: ListResponse<Content> = {
    contents,
    totalCount: rooms.totalCount,
    limit: rooms.limit,
    offset: rooms.offset,
  };
  return NextResponse.json(res);
}
