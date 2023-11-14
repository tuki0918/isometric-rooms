import React, { FC } from "react";
import { useRooms } from "../hooks/useRooms";
import { GridRooms } from "./GridRooms";

// TODO: pagination
export const Top: FC = () => {
  // A maximum of 9 items can be displayed.
  const { data, status } = useRooms({
    limit: 9,
  });

  if (data === undefined) {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error fetching data</p>;
  }

  const { contents } = data;

  return (
    <div>
      <GridRooms contents={contents} />
    </div>
  );
};
