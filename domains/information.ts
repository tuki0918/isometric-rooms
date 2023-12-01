import { InformationContent } from "types/microcms";
import { z } from "zod";

const InformationCategorySchema = z.union([
  z.literal("お知らせ"),
  z.literal("リリース"),
  z.literal("未分類"),
]);

const InformationSchema = z.object({
  title: z.string(),
  content: z.string(),
  summary: z.string().optional(),
  is_critical: z.boolean(),
  category: z.array(InformationCategorySchema),
});

type InformationCategoryType = z.infer<typeof InformationCategorySchema>;

export class Information {
  #title: string;
  #content: string;
  #summary?: string;
  #is_critical: boolean;
  #category: InformationCategoryType[];

  constructor(data: InformationContent) {
    const validatedData = InformationSchema.parse(data);

    this.#title = validatedData.title;
    this.#content = validatedData.content;
    this.#summary = validatedData.summary;
    this.#is_critical = validatedData.is_critical;
    this.#category = validatedData.category;
  }

  get title() {
    return this.#title;
  }

  get content() {
    return this.#content;
  }

  get summary() {
    return this.#summary;
  }

  get is_critical() {
    return this.#is_critical;
  }

  get category() {
    return this.#category;
  }
}
