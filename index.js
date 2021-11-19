const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const bot = new Discord.Client();
const { Token } = require("./config.json");
const { prefix } = require("./config.js");
bot.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command);
}

bot.on("ready", () => {
  console.log(`Logged in as ${bot.displayName}`);
  bot.user.setPresence({
    activity: {
      type: "STREAMING",
      name: `using &help | Bot run in 3 different languages!`,
      status: `idle`,
      url: "https://twitch.tv/locatedreaper",
      details: "none",
    },
  });
});
bot.on('guildMemberAdd', member => {
  member.send("Welcome to the server!");
});
bot.on("message", (message) => {
  if (message.content.startsWith("#test")) {
    message.reply("HUDHwaH8d6&@&*!()7897SDhbw6a7!_!&^@");
  }
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLocaleLowerCase();

  if (command === "kick") {
    bot.commands.get("kick").execute(message, args);
  } else if (command === "ban") {
    bot.commands.get("ban").execute(message, args);
  } else if (command === "ticket") {
    bot.commands.get("ticket").execute(message, args);
  } else if (command === "mute") {
    bot.commands.get("mute").execute(message, args);
  } else if (command === "restart") {
    bot.commands.get("restart").execute(message, args);
  } else if (command === "unmute") {
    bot.commands.get("unmute").execute(message, args);
  } else if (command === "play") {
    bot.commands.get("play").execute(message, args);
  } else if (command === "leave") {
    bot.commands.get("leave").execute(message, args);
  } 
});
bot.login(Token);
