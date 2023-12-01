import { RoomContent } from "types/microcms";
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
  title: z.string(),
  image: ImageSchema,
  category: z.array(RoomCategorySchema),
  is_generated_by_ai: z.boolean(),
});

type ImageType = z.infer<typeof ImageSchema>;
type RoomContentCategoryType = z.infer<typeof RoomCategorySchema>;

export class Room {
  #title: string;
  #image: ImageType;
  #category: RoomContentCategoryType[];
  #is_generated_by_ai: boolean;

  constructor(data: RoomContent) {
    const validatedData = RoomSchema.parse(data);

    this.#title = validatedData.title;
    this.#image = validatedData.image;
    this.#category = validatedData.category;
    this.#is_generated_by_ai = validatedData.is_generated_by_ai;
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

  get is_generated_by_ai() {
    return this.#is_generated_by_ai;
  }
}
