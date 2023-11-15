import React, { FC } from "react";
import { useRooms, ContentCategory } from "../hooks/useRooms";
import { GridRooms } from "./GridRooms";

export const Top: FC = () => {
  const limit = 18;
  const page = 1;
  const offset = (page - 1) * limit;

  // TODO: filter by category
  const category: ContentCategory | undefined = undefined;

  const { data, status } = useRooms({
    limit,
    offset,
    orders: "-created_at", // desc
    filters: category ? `category[contains]${category}` : undefined,
  });

  if (status === "error") {
    return <p>Error fetching data</p>;
  }

  if (data === undefined) {
    return <p>Loading...</p>;
  }

  const { contents } = data;

  return (
    <div>
      <GridRooms contents={contents} />
    </div>
  );
};
