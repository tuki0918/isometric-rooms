import type { Meta, Preview, StoryObj } from "@storybook/react";

import GridRooms, { GridSkeletonRooms, RoomCard } from "components/GridRooms";
import { Room } from "domains/Room";

const meta: Meta<typeof GridRooms> = {
  title: "Components/GridRooms",
  component: GridRooms,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GridRooms>;

export const Default: Story = {
  args: {
    contents: [
      new Room({
        id: "1",
        title: "title 1",
        image: {
          url: "logo.png",
        },
        is_generated_by_ai: true,
        category: ["部屋"],
        createdAt: "2023-12-01T01:00:00.000Z",
        updatedAt: "2023-12-01T01:00:00.000Z",
        publishedAt: "2023-12-01T01:00:00.000Z",
        revisedAt: "2023-12-01T01:00:00.000Z",
      }),
      new Room({
        id: "2",
        title: "title 2",
        image: {
          url: "logo.png",
        },
        is_generated_by_ai: true,
        category: ["部屋"],
        createdAt: "2023-12-01T01:00:00.000Z",
        updatedAt: "2023-12-01T01:00:00.000Z",
        publishedAt: "2023-12-01T01:00:00.000Z",
        revisedAt: "2023-12-01T01:00:00.000Z",
      }),
      new Room({
        id: "3",
        title: "title 3",
        image: {
          url: "logo.png",
        },
        is_generated_by_ai: true,
        category: ["施設"],
        createdAt: "2023-12-01T01:00:00.000Z",
        updatedAt: "2023-12-01T01:00:00.000Z",
        publishedAt: "2023-12-01T01:00:00.000Z",
        revisedAt: "2023-12-01T01:00:00.000Z",
      }),
      new Room({
        id: "4",
        title: "title 4",
        image: {
          url: "logo.png",
        },
        is_generated_by_ai: false,
        category: ["未分類"],
        createdAt: "2023-12-01T01:00:00.000Z",
        updatedAt: "2023-12-01T01:00:00.000Z",
        publishedAt: "2023-12-01T01:00:00.000Z",
        revisedAt: "2023-12-01T01:00:00.000Z",
      }),
    ],
  },
};

export const Content: Preview = {
  decorators: [
    () => (
      <div style={{ width: "512px", height: "512px" }}>
        <RoomCard
          content={
            new Room({
              id: "1",
              title: "title 1",
              image: {
                url: "logo.png",
              },
              is_generated_by_ai: true,
              category: ["部屋"],
              createdAt: "2023-12-01T01:00:00.000Z",
              updatedAt: "2023-12-01T01:00:00.000Z",
              publishedAt: "2023-12-01T01:00:00.000Z",
              revisedAt: "2023-12-01T01:00:00.000Z",
            })
          }
        />
      </div>
    ),
  ],
};

export const NotFound: Story = {
  args: {
    contents: [],
  },
};

export const Loading: Preview = {
  decorators: [() => <GridSkeletonRooms />],
};
