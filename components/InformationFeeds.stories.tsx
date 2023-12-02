import type { Meta, Preview, StoryObj } from "@storybook/react";
import { Information } from "domains/Information";

import InformationFeeds, {
  SkeletonInformation,
} from "components/InformationFeeds";

const meta: Meta<typeof InformationFeeds> = {
  title: "Components/InformationFeeds",
  component: InformationFeeds,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InformationFeeds>;

export const Default: Story = {
  args: {
    contents: [
      Information.create({
        id: "5",
        createdAt: "2023-11-24T16:16:00.000Z",
        updatedAt: "2023-11-24T16:16:00.000Z",
        publishedAt: "2023-11-24T16:16:00.000Z",
        revisedAt: "2023-11-24T16:16:00.000Z",
        title: "新しく XXX件 投稿しました",
        content: "<p>...</p>",
        summary: "XXX \nXXX \nXXX \nXXX \nXXX ",
        is_critical: true,
        category: ["お知らせ"],
      }),
      Information.create({
        id: "4",
        createdAt: "2023-11-24T15:00:00.000Z",
        updatedAt: "2023-11-24T15:00:00.000Z",
        publishedAt: "2023-11-24T15:00:00.000Z",
        revisedAt: "2023-11-24T15:00:00.000Z",
        title: "XXX をリリースしました",
        content: "<p>...</p>",
        is_critical: false,
        category: ["リリース"],
      }),
      Information.create({
        id: "3",
        createdAt: "2023-11-24T14:00:00.000Z",
        updatedAt: "2023-11-24T14:00:00.000Z",
        publishedAt: "2023-11-24T14:00:00.000Z",
        revisedAt: "2023-11-24T14:00:00.000Z",
        title: "新しく XXX件 投稿しました",
        content: "<p>...</p>",
        is_critical: false,
        category: ["お知らせ"],
      }),
      Information.create({
        id: "2",
        createdAt: "2023-11-23T12:00:00.000Z",
        updatedAt: "2023-11-23T12:00:00.000Z",
        publishedAt: "2023-11-23T12:00:00.000Z",
        revisedAt: "2023-11-23T12:00:00.000Z",
        title: "新しく XXX件 投稿しました",
        content: "<p>...</p>",
        is_critical: false,
        category: ["お知らせ"],
      }),
      Information.create({
        id: "1",
        createdAt: "2023-11-22T12:00:00.000Z",
        updatedAt: "2023-11-22T12:00:00.000Z",
        publishedAt: "2023-11-22T12:00:00.000Z",
        revisedAt: "2023-11-22T12:00:00.000Z",
        title: "XXX をリリースしました",
        content: "<p>...</p>",
        summary:
          "XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX \nXXX XXX XXX XXX XXX XXX XXX XXX XXX XXX ",
        is_critical: true,
        category: ["リリース"],
      }),
    ],
  },
};

// export const NotFound: Story = {
//   args: {
//     contents: [],
//   },
// };

export const Loading: Preview = {
  decorators: [() => <SkeletonInformation />],
};
