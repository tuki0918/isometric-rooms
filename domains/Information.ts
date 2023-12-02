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
  #summary: string | undefined;
  #isCritical: boolean;
  #category: InformationCategoryType[];
  #publishedAt: Date | undefined;
  #revisedAt: Date | undefined;

  private constructor(
    data: Omit<InformationContent, "createdAt" | "updatedAt">,
  ) {
    this.#id = data.id;
    this.#title = data.title;
    this.#content = data.content;
    this.#summary = data.summary;
    this.#isCritical = data.is_critical;
    this.#category = data.category;
    this.#publishedAt = parseToDate(data, "publishedAt");
    this.#revisedAt = parseToDate(data, "revisedAt");
  }

  static create(data: InformationContent): Information {
    const validatedData = InformationSchema.parse(data);
    return new Information(validatedData);
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
