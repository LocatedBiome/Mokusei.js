module.exports = {
  name: "message",
  execute(message, bot) {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    if (message.content.startsWith(bot.prefix));

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!bot.commands.has(commandName)) return;

    const command = bot.commands.get(commandName);

    try {
      command.execute(message, args, bot);
    } catch (err) {
      console.log(err);
    }
  },
};
