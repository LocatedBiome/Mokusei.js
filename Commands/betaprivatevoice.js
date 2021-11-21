module.exports = {
  async execute(message, args) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send(
        `${message.author.tag}, you are not in a vc.`
      );
    const connection = await voiceChannel.join();
  },
};
