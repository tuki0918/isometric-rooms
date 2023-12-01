import { Room } from "./Room";
import { User } from "./User";

export class RoomCard {
  #room: Room;
  #user: User;

  constructor(data: { room: Room; user: User }) {
    this.#room = data.room;
    this.#user = data.user;
  }

  get room() {
    return this.#room;
  }

  get user() {
    return this.#user;
  }
}
