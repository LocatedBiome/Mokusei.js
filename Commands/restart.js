module.exports = {
    name: 'restart',
    description: 'Restarts the bot',
    permissions: ['ADMINISTRATOR'],
    execute(){
            process.exit();
    }
}