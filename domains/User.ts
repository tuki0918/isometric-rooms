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

  private constructor(data: Omit<UserContent, "createdAt" | "updatedAt">) {
    this.#id = data.id;
    this.#aliasId = data.alias_id;
    this.#name = data.name;
    this.#image = data.image;
  }

  static create(data: UserContent): User {
    const validatedData = UserSchema.parse(data);
    return new User(validatedData);
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
