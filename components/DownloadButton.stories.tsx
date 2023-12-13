import type { Meta, StoryObj } from "@storybook/react";

import DownloadButton from "components/DownloadButton";

const meta: Meta<typeof DownloadButton> = {
  title: "Components/DownloadButton",
  component: DownloadButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DownloadButton>;

export const Default: Story = {};
