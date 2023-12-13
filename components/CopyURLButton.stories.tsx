import type { Meta, StoryObj } from "@storybook/react";

import CopyURLButton from "components/CopyURLButton";

const meta: Meta<typeof CopyURLButton> = {
  title: "Components/CopyURLButton",
  component: CopyURLButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CopyURLButton>;

export const Default: Story = {};
