import { ANONYMOUS_USER_ID } from "app/metadata";
import { Room } from "domains/Room";
import { RoomCard } from "domains/RoomCard";
import { User } from "domains/User";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import type { RoomCardContent } from "types/api";
import type { RoomContent, UserContent } from "types/microcms";
import { fetchContent } from "utils/microCMS";

async function getRoomContent(id: string) {
  // cache lifetime (60 sec)
  return await fetchContent<RoomContent>(
    "rooms",
    id,
    {},
    { next: { revalidate: 60 } },
  );
}

async function getUserContent(id: string) {
  // cache lifetime (60 sec)
  return await fetchContent<UserContent>(
    "users",
    id,
    {},
    { next: { revalidate: 60 } },
  );
}

export async function getRoom(id: string) {
  const data = await getRoomContent(id);
  return Room.create(data);
}

export async function getUser(id: string) {
  const data = await getUserContent(id);
  return User.create(data);
}

export async function getRoomCard(id: string) {
  try {
    const room = await getRoom(id);
    const user = await getUser(room.createdByUserId ?? ANONYMOUS_USER_ID);
    return new RoomCard({ room, user });
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") || undefined;
  if (id === undefined) notFound();
  const content = await getRoomCard(id);
  if (!content) notFound();
  const res: RoomCardContent = content.toObject();
  return NextResponse.json(res);
}
