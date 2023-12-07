"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CopyURLButton from "components/CopyURLButton";
import Modal from "components/Modal";
import RoomDetailsCard from "components/RoomDetailsCard";
import { RoomCard } from "domains/RoomCard";
import { useTranslations } from "next-intl";
import { FC } from "react";
import type { RoomCardContent } from "types/api";
import { useFetchContent } from "utils/fetch";
import { useRouter } from "utils/i18n/navigation";

const queryClient = new QueryClient();

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props) {
  const router = useRouter();
  const id = params.id;
  const t = useTranslations("Common");

  return (
    <div>
      <Modal isOpen={true}>
        <div>
          <QueryClientProvider client={queryClient}>
            <RoomPage id={id} />
          </QueryClientProvider>
        </div>

        <div className="my-8 flex items-center justify-center space-x-4">
          <CopyURLButton />

          <button
            onClick={() => router.back()}
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-800 shadow hover:bg-gray-100 md:text-base"
          >
            {t("btn/close")}
          </button>
        </div>
      </Modal>
    </div>
  );
}

const RoomPage: FC<{ id: string }> = ({ id }) => {
  const { data, error } = useFetchContent<RoomCardContent>("room", id);
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const content = RoomCard.create(data);
  return <RoomDetailsCard content={content} />;
};
