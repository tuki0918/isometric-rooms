import type { Meta, StoryObj } from "@storybook/react";

import CategoryMenu from "components/CategoryMenu";

const meta: Meta<typeof CategoryMenu> = {
  title: "Components/CategoryMenu",
  component: CategoryMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CategoryMenu>;

export const Default: Story = {
  args: {
    selectedCategory: "すべて",
  },
};
