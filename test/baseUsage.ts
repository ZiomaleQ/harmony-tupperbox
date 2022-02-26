import { Tupperbox } from "../mod.ts";
import { CommandClient, Intents } from "../deps.ts";
import { TOKEN } from "./token.ts";

const Bot = new CommandClient({
  prefix: "<",
  token: TOKEN,
});

Bot.extensions.load(Tupperbox);

Bot.once("ready", () => {
  console.log(`Bot > ${Bot.user?.tag} < ready`);
});

Bot.connect(undefined, Intents.NonPrivileged);
