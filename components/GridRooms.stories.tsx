import type { Meta, Preview, StoryObj } from "@storybook/react";

import GridRooms, {
  GridRoomCard,
  GridSkeletonRooms,
} from "components/GridRooms";
import { RoomCard } from "domains/RoomCard";
import type { RoomContent, UserContent } from "types/microcms";

const meta: Meta<typeof GridRooms> = {
  title: "Components/GridRooms",
  component: GridRooms,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GridRooms>;

const roomContent: RoomContent = {
  id: "test",
  title: "test",
  image: {
    url: "logo.png",
  },
  is_generated_by_ai: true,
  category: ["部屋"],
  created_by_user_id: "anonymous",
  createdAt: "2023-12-01T01:00:00.000Z",
  updatedAt: "2023-12-01T01:00:00.000Z",
  publishedAt: "2023-12-01T01:00:00.000Z",
  revisedAt: "2023-12-01T01:00:00.000Z",
};

const anonymousUser: UserContent = {
  id: "anonymous",
  alias_id: "anonymous",
  name: "anonymous",
  createdAt: "2000-01-01T00:00:00.000Z",
  updatedAt: "2000-01-01T00:00:00.000Z",
  publishedAt: "2000-01-01T00:00:00.000Z",
  revisedAt: "2000-01-01T00:00:00.000Z",
};

export const Default: Story = {
  args: {
    contents: [
      RoomCard.create({
        room: {
          ...roomContent,
          id: "1",
          title: "title 1",
          image: {
            url: "logo.png",
          },
          is_generated_by_ai: true,
          category: ["部屋"],
        },
        user: anonymousUser,
      }),
      RoomCard.create({
        room: {
          ...roomContent,
          id: "2",
          title: "title 2",
          image: {
            url: "logo.png",
          },
          is_generated_by_ai: true,
          category: ["部屋"],
          created_by_user_id: "anonymous",
        },
        user: anonymousUser,
      }),
      RoomCard.create({
        room: {
          ...roomContent,
          id: "3",
          title: "title 3",
          image: {
            url: "logo.png",
          },
          is_generated_by_ai: true,
          category: ["施設"],
          created_by_user_id: "anonymous",
        },
        user: anonymousUser,
      }),
      RoomCard.create({
        room: {
          ...roomContent,
          id: "4",
          title: "title 4",
          image: {
            url: "logo.png",
          },
          is_generated_by_ai: false,
          category: ["未分類"],
          created_by_user_id: "anonymous",
        },
        user: anonymousUser,
      }),
    ],
  },
};

export const Content: Preview = {
  decorators: [
    () => (
      <div style={{ width: "512px", height: "512px" }}>
        <GridRoomCard
          content={RoomCard.create({
            room: {
              ...roomContent,
              id: "1",
              title: "title 1",
              image: {
                url: "logo.png",
              },
              is_generated_by_ai: true,
              category: ["部屋"],
              created_by_user_id: "anonymous",
            },
            user: anonymousUser,
          })}
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
