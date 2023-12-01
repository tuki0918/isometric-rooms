import { UserContent } from "types/microcms";
import { z } from "zod";

const ImageSchema = z.object({
  url: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
});

const UserSchema = z.object({
  id: z.string(),
  alias_id: z.string(),
  name: z.string(),
  image: ImageSchema.optional(),
});

type ImageType = z.infer<typeof ImageSchema>;

export class User {
  #id: string;
  #aliasId: string;
  #name: string;
  #image: ImageType | undefined;

  constructor(data: UserContent) {
    const validatedData = UserSchema.parse(data);

    this.#id = validatedData.id;
    this.#aliasId = validatedData.alias_id;
    this.#name = validatedData.name;
    this.#image = validatedData.image;
  }

  get id() {
    return this.#id;
  }

  get aliasId() {
    return this.#aliasId;
  }

  get name() {
    return this.#name;
  }

  get image() {
    return this.#image;
  }
}
