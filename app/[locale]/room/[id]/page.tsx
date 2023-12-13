import { ANONYMOUS_USER_ID } from "app/metadata";
import CopyURLButton from "components/CopyURLButton";
import RoomDetailsCard from "components/RoomDetailsCard";
import { Room } from "domains/Room";
import { RoomCard } from "domains/RoomCard";
import { User } from "domains/User";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { RoomContent, UserContent } from "types/microcms";
import { Link } from "utils/i18n/navigation";
import { fetchContent } from "utils/microCMS";

type Props = {
  params: { id: string };
};

async function getRoom(id: string) {
  // cache lifetime (60 sec)
  const data = await fetchContent<RoomContent>(
    "rooms",
    id,
    {},
    { next: { revalidate: 60 } },
  );
  return Room.create(data);
}

async function getUser(id: string) {
  // cache lifetime (60 sec)
  const data = await fetchContent<UserContent>(
    "users",
    id,
    {},
    { next: { revalidate: 60 } },
  );
  return User.create(data);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  try {
    const content = await getRoom(id);
    return {
      title: content.title,
    };
  } catch (error) {
    console.error(error);
    notFound();
  }
}

async function getRoomCard(id: string) {
  try {
    const room = await getRoom(id);
    const user = await getUser(room.createdByUserId ?? ANONYMOUS_USER_ID);
    return new RoomCard({ room, user });
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export default async function Page({ params }: Props) {
  const id = params.id;
  const content = await getRoomCard(id);
  if (!content) notFound();
  const t = await getTranslations("Common");
  return (
    <div className="container mx-auto">
      <div className="mx-4 md:mx-8">
        <div className="my-8 flex items-center space-x-4">
          <Link
            className="inline-flex items-center text-gray-500 hover:text-gray-600"
            href="/"
          >
            <svg
              className="ms-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10 21.308L.692 12L10 2.692l1.063 1.064L2.82 12l8.244 8.244z"
              />
            </svg>

            {t("nav/back")}
          </Link>
        </div>

        <div className="my-8">
          <RoomDetailsCard content={content} />
        </div>

        <div className="my-8 flex flex-row items-center justify-center">
          <CopyURLButton />
        </div>
      </div>
    </div>
  );
}
