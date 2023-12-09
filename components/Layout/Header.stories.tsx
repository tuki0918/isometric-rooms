import type { Meta, StoryObj } from "@storybook/react";

import { SITE_TITLE } from "app/metadata";
import LayoutHeader from "components/Layout/Header";

const meta: Meta<typeof LayoutHeader> = {
  title: "Layout/LayoutHeader",
  component: LayoutHeader,
  args: {
    title: SITE_TITLE,
  },
};

export default meta;
type Story = StoryObj<typeof LayoutHeader>;

export const Default: Story = {};
