import type { Meta, Preview, StoryObj } from "@storybook/react";
import { useState } from "react";

import CategoryButton, {
  FILTER_ALL_CATEGORIES,
} from "components/CategoryButton";

const meta: Meta<typeof CategoryButton> = {
  title: "Components/CategoryButton",
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
    /* eslint-disable react-hooks/rules-of-hooks */
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

export const All: Preview = {
  decorators: [
    () => (
      <div className="mb-4 flex justify-center space-x-2">
        {FILTER_ALL_CATEGORIES.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            isSelected={false}
            onSelect={() => void (() => {})}
          />
        ))}
      </div>
    ),
  ],
};
