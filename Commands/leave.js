module.exports = {
    name: 'leave',
    description: 'Stop the bot and leave the channel',
    async execute (message, args) {
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send(`${message.author.tag}, you are not in a vc.`);
        await voiceChannel.leave();
        await message.channel.send('Bye')
    }
}