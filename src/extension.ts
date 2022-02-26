import { CommandClient, Extension } from "../deps.ts";

export class Tupperbox extends Extension {

  subPrefix = "box"

  constructor(client: CommandClient) {
    super(client);
  }
}
