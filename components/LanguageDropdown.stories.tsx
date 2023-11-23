import type { Meta, StoryObj } from "@storybook/react";

import LanguageDropdown from "components/LanguageDropdown";

const meta: Meta<typeof LanguageDropdown> = {
  title: "Components/LanguageDropdown",
  component: LanguageDropdown,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof LanguageDropdown>;

export const Default: Story = {};
