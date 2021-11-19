module.exports = {
    name: 'ban',
    description: 'Bans a member',
    permissions: ['ADMINISTRATOR'],
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("User has been banned.");
        }else{
            message.channel.send("You couldent ban that member");
        }
    }
}