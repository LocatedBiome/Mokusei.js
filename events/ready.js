module.exports = {
  name: "ready",
  once: true,
  execute(bot) {
    console.log(`Logged in as ${bot.user.tag}`);
  },
};
