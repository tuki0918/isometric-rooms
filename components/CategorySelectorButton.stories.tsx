import type { Meta, StoryObj } from "@storybook/react";

import { FILTER_ALL_CATEGORIES } from "components/CategoryMenu";
import CategorySelectorButton from "components/CategorySelectorButton";

const meta: Meta<typeof CategorySelectorButton> = {
  title: "Components/CategorySelectorButton",
  component: CategorySelectorButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CategorySelectorButton>;

export const DropdownMenu: Story = {
  render: (args) => {
    const selectedCategory = args.category;
    const onSelect = args.onSelect;

    return (
      <ul className="py-2 text-sm text-gray-700">
        {FILTER_ALL_CATEGORIES.map((category) => (
          <CategorySelectorButton
            key={category}
            category={category}
            isSelected={selectedCategory === category}
            onSelect={onSelect}
          />
        ))}
      </ul>
    );
  },
  args: {
    category: "すべて",
  },
};

export const Option: Story = {
  args: {
    category: "すべて",
    isSelected: false,
  },
};
