import { RoomContent } from "types/microcms";
import { parseToDate } from "utils/microCMS";
import { z } from "zod";

const ImageSchema = z.object({
  url: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
});

const RoomCategorySchema = z.union([
  z.literal("部屋"),
  z.literal("施設"),
  z.literal("モノ"),
  z.literal("自然"),
  z.literal("未分類"),
]);

const RoomSchema = z.object({
  id: z.string(),
  title: z.string(),
  image: ImageSchema,
  category: z.array(RoomCategorySchema),
  is_generated_by_ai: z.boolean(),
  created_by_user_id: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string().optional(),
  revisedAt: z.string().optional(),
});

type ImageType = z.infer<typeof ImageSchema>;
type RoomContentCategoryType = z.infer<typeof RoomCategorySchema>;

export class Room {
  #id: string;
  #title: string;
  #image: ImageType;
  #category: RoomContentCategoryType[];
  #isGeneratedByAi: boolean;
  #createdByUserId: string | undefined;
  #createdAt: Date;
  #updatedAt: Date;
  #publishedAt: Date | undefined;
  #revisedAt: Date | undefined;

  private constructor(data: RoomContent) {
    this.#id = data.id;
    this.#title = data.title;
    this.#image = data.image;
    this.#category = data.category;
    this.#isGeneratedByAi = data.is_generated_by_ai;
    this.#createdByUserId = data.created_by_user_id;
    this.#createdAt = parseToDate(data, "createdAt");
    this.#updatedAt = parseToDate(data, "updatedAt");
    this.#publishedAt = parseToDate(data, "publishedAt");
    this.#revisedAt = parseToDate(data, "revisedAt");
  }

  static create(data: RoomContent): Room {
    const validatedData = RoomSchema.parse(data);
    return new Room(validatedData);
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get image() {
    return this.#image;
  }

  get category() {
    return this.#category;
  }

  get isGeneratedByAi() {
    return this.#isGeneratedByAi;
  }

  get createdByUserId() {
    return this.#createdByUserId;
  }

  toObject(): RoomContent {
    return {
      id: this.#id,
      title: this.#title,
      image: this.#image,
      category: this.#category,
      is_generated_by_ai: this.#isGeneratedByAi,
      created_by_user_id: this.#createdByUserId,
      createdAt: this.#createdAt.toISOString(),
      updatedAt: this.#updatedAt.toISOString(),
      publishedAt: this.#publishedAt?.toISOString(),
      revisedAt: this.#revisedAt?.toISOString(),
    };
  }
}
