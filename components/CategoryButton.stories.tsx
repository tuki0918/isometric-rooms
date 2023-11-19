import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import CategoryButton from "./CategoryButton";

const meta: Meta<typeof CategoryButton> = {
  component: CategoryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CategoryButton>;

export const Selected: Story = {
  args: {
    category: "すべて",
    isSelected: true,
    onSelect: () => void (() => {}),
  },
};

export const Clickable: StoryObj<typeof CategoryButton> = {
  render: (args) => {
    const [isSelected, setIsSelected] = useState(args.isSelected);

    return (
      <CategoryButton
        {...args}
        isSelected={isSelected}
        onSelect={() => setIsSelected(!isSelected)}
      />
    );
  },
  args: {
    category: "すべて",
    isSelected: false,
  },
};
