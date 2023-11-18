import type { Meta, StoryObj } from "@storybook/react";

import { LayoutHeader } from "../components/LayoutHeader";

const meta: Meta<typeof LayoutHeader> = {
  component: LayoutHeader,
  // tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LayoutHeader>;

export const Default: Story = {};
