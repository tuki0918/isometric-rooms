import type { Meta, StoryObj } from "@storybook/react";

import { LayoutFooter } from "./LayoutFooter";

const meta: Meta<typeof LayoutFooter> = {
  component: LayoutFooter,
};

export default meta;
type Story = StoryObj<typeof LayoutFooter>;

export const Default: Story = {};
