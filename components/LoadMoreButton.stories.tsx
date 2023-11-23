import type { Meta, StoryObj } from "@storybook/react";

import LoadMoreButton from "components/LoadMoreButton";

const meta: Meta<typeof LoadMoreButton> = {
  title: "Components/LoadMoreButton",
  component: LoadMoreButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LoadMoreButton>;

export const Default: Story = {
  args: {
    isLoading: false,
    hasMore: false,
    onLoadMore: () => void (() => {}),
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    hasMore: true,
    onLoadMore: () => void (() => {}),
  },
};

export const LoadMore: Story = {
  args: {
    isLoading: false,
    hasMore: true,
    onLoadMore: () => void (() => {}),
  },
};

// export const NonExistentCase: Story = {
//   args: {
//     isLoading: true,
//     hasMore: false,
//     onLoadMore: () => void (() => {}),
//   },
// };
