import { InformationContent } from "types/microcms";
import { parseToDate } from "utils/microCMS";
import { z } from "zod";

const InformationCategorySchema = z.union([
  z.literal("お知らせ"),
  z.literal("リリース"),
  z.literal("未分類"),
]);

const InformationSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  summary: z.string().optional(),
  is_critical: z.boolean(),
  category: z.array(InformationCategorySchema),
  publishedAt: z.string().optional(),
  revisedAt: z.string().optional(),
});

type InformationCategoryType = z.infer<typeof InformationCategorySchema>;

export class Information {
  #id: string;
  #title: string;
  #content: string;
  #summary?: string;
  #isCritical: boolean;
  #category: InformationCategoryType[];
  #publishedAt?: Date;
  #revisedAt?: Date;

  constructor(data: InformationContent) {
    const validatedData = InformationSchema.parse(data);
    const publishedAt = parseToDate(data, "publishedAt");
    const revisedAt = parseToDate(data, "revisedAt");

    this.#id = validatedData.id;
    this.#title = validatedData.title;
    this.#content = validatedData.content;
    this.#summary = validatedData.summary;
    this.#isCritical = validatedData.is_critical;
    this.#category = validatedData.category;
    this.#publishedAt = publishedAt;
    this.#revisedAt = revisedAt;
  }
  get id() {
    return this.#id;
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

  get isCritical() {
    return this.#isCritical;
  }

  get category() {
    return this.#category;
  }

  get publishedAt() {
    return this.#publishedAt;
  }

  get revisedAt() {
    return this.#revisedAt;
  }
}
