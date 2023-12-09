import type { Meta, StoryObj } from "@storybook/react";

import LayoutFooter from "components/Layout/Footer";

const meta: Meta<typeof LayoutFooter> = {
  title: "Layout/LayoutFooter",
  component: LayoutFooter,
};

export default meta;
type Story = StoryObj<typeof LayoutFooter>;

export const Default: Story = {};
