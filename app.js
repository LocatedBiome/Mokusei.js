const fs = require("fs");
const Discord = require("discord.js");
const bot = new Discord.Client();
const { Token } = require("./config.json");
const { prefix } = require("./config.js");

require("dotenv").config();
const mongoose = require("./database/mongoose");

bot.prefix = prefix;
bot.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
const eventFiles = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    bot.once(event.name, (...args) => event.execute(...args, bot));
  } else {
    bot.on(event.name, (...args) => event.execute(...args, bot));
  }
}

mongoose.init();
bot.login(Token);
