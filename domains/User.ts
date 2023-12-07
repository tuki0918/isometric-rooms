import { ANONYMOUS_USER_ID } from "app/metadata";
import { UserContent } from "types/microcms";
import { parseToDate } from "utils/microCMS";
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
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string().optional(),
  revisedAt: z.string().optional(),
});

type ImageType = z.infer<typeof ImageSchema>;

export class User {
  #id: string;
  #aliasId: string;
  #name: string;
  #image: ImageType | undefined;
  #createdAt: Date;
  #updatedAt: Date;
  #publishedAt: Date | undefined;
  #revisedAt: Date | undefined;

  private constructor(data: UserContent) {
    this.#id = data.id;
    this.#aliasId = data.alias_id;
    this.#name = data.name;
    this.#image = data.image;
    this.#createdAt = parseToDate(data, "createdAt");
    this.#updatedAt = parseToDate(data, "updatedAt");
    this.#publishedAt = parseToDate(data, "publishedAt");
    this.#revisedAt = parseToDate(data, "revisedAt");
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

  toObject(): UserContent {
    return {
      id: this.#id,
      alias_id: this.#aliasId,
      name: this.#name,
      image: this.#image,
      createdAt: this.#createdAt.toISOString(),
      updatedAt: this.#updatedAt.toISOString(),
      publishedAt: this.#publishedAt?.toISOString(),
      revisedAt: this.#revisedAt?.toISOString(),
    };
  }
}

const anonymousUserContent: UserContent = {
  id: ANONYMOUS_USER_ID,
  alias_id: ANONYMOUS_USER_ID,
  name: ANONYMOUS_USER_ID,
  createdAt: "2000-01-01T00:00:00.000Z",
  updatedAt: "2000-01-01T00:00:00.000Z",
  publishedAt: "2000-01-01T00:00:00.000Z",
  revisedAt: "2000-01-01T00:00:00.000Z",
};

export const anonymousUser: User = User.create(anonymousUserContent);
