module.exports = {
    name: "unmute",
    description: "Unmutes a member",
    permissions: ["ADMINISTRATOR"],
    execute(message, args) {
      const target = message.mentions.users.first();
      if (target) {
        let mainRole = message.guild.roles.cache.find(
          (role) => role.name === "Kinda sus"
        );
        let mutedRole = message.guild.roles.cache.find(
          (role) => role.name === "Muted"
        );
        let memberTarget = message.guild.members.cache.get(target.id);
        memberTarget.roles.add(mainRole.id);
        memberTarget.roles.remove(mutedRole.id);
        message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
      } else {
        message.channel.send("That user does not exist.");
      }
    },
  };
  