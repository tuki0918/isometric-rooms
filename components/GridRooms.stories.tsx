import type { Meta, Preview, StoryObj } from "@storybook/react";

import GridRooms, { GridSkeletonRooms, Room } from "components/GridRooms";

const meta: Meta<typeof GridRooms> = {
  component: GridRooms,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GridRooms>;

export const Default: Story = {
  args: {
    contents: [
      {
        id: "1",
        title: "title 1",
        image: {
          url: "logo.png",
        },
        is_generated_by_ai: true,
      },
      {
        id: "2",
        title: "title 2",
        image: {
          url: "logo.png",
        },
        is_generated_by_ai: true,
      },
      {
        id: "3",
        title: "title 3",
        image: {
          url: "logo.png",
        },
        is_generated_by_ai: true,
      },
      {
        id: "4",
        title: "title 4",
        image: {
          url: "logo.png",
        },
        is_generated_by_ai: false,
      },
    ],
  },
};

export const Content: Preview = {
  decorators: [
    () => (
      <div style={{ width: "512px", height: "512px" }}>
        <Room
          content={{
            id: "1",
            title: "title",
            image: {
              url: "logo.png",
            },
            is_generated_by_ai: true,
          }}
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
