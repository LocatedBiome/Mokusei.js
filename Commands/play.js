const yts = require("yt-search");
const ytdl = require("ytdl-core");

module.exports = {
  name: "play",
  description: "Joines and plays a video from youtube",
  async execute(message, args) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send(
        `${message.author.tag}, you are not in a vc.`
      );
    let permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return message.channel.send("You don't have permission `CONNECT`!");
    if (!permissions.has("SPEAK"))
      return message.channel.send("You don't have permission `SPEAK`!");
    if (!args.length)
      return message.channel.send(`You need to send the second argument!`);

    const validURL = (str) => {
      var regex =
        /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
      if (!regex.test(str)) {
        return false;
      } else {
        return true;
      }
    };

    const connection = await voiceChannel.join();

    const videoFinder = async (query) => {
      const videoResult = await yts(query);
      return videoResult.videos.length > 1 ? videoResult.videos[0] : null;
    };
    var video = await videoFinder(args.join(" "));

    if (video) {
      const stream = ytdl(video.url, { filter: "audioonly" });
      connection.play(stream, { seek: 0, volume: 0.25 }).on("finish", () => {
        voiceChannel.leave();
      });

      await message.reply(`Now playing ***${video.title}***`);
    }
  },
};
