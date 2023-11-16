import React, { FC } from "react";
import { useRooms, ContentCategory } from "../hooks/useRooms";
import { GridRooms, GridSkeletonRooms } from "./GridRooms";

export const Top: FC = () => {
  const limit = 18;
  const page = 1;
  const offset = (page - 1) * limit;

  // TODO: filter by category
  const category: ContentCategory | undefined = undefined;

  const { data, status } = useRooms({
    limit,
    offset,
    orders: "-publishedAt", // desc
    filters: category ? `category[contains]${category}` : undefined,
  });

  if (status === "error") {
    return <p>Error fetching data</p>;
  }

  if (data === undefined) {
    return <GridSkeletonRooms />;
  }

  const { contents } = data;

  return (
    <div>
      <GridRooms contents={contents} />
    </div>
  );
};
