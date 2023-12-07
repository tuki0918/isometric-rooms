import { RoomContent, UserContent } from "types/microcms";
import { Room } from "./Room";
import { User } from "./User";

export class RoomCard {
  #room: Room;
  #user: User;

  constructor(data: { room: Room; user: User }) {
    this.#room = data.room;
    this.#user = data.user;
  }

  static create(data: { room: RoomContent; user: UserContent }): RoomCard {
    const room = Room.create(data.room);
    const user = User.create(data.user);
    return new RoomCard({ room, user });
  }

  get room() {
    return this.#room;
  }

  get user() {
    return this.#user;
  }

  toObject(): { room: RoomContent; user: UserContent } {
    return {
      room: this.room.toObject(),
      user: this.user.toObject(),
    };
  }
}
