const commando = require('discord.js-commando');

module.exports = class LotteryCommand extends commando.Command {
    constructor(Client) {
        super(Client, {
            name: 'lottery',
            group: 'random',
            memberName: 'lottery',
            description: '1 in 100 Chance of Winning. Winners get... The feeling of winning? (;lottery)',
            examples: [';lottery']
        });
    }

    async run(message) {
        if (message.channel.type !== 'dm') {
            if (!message.channel.permissionsFor(this.client.user).hasPermission(['SEND_MESSAGES', 'READ_MESSAGES'])) return;
        }
        console.log("[Command] " + message.content);
        let lotteryNumber = ['Winner'][Math.floor(Math.random() * 100)];
        if (lotteryNumber === "Winner") {
            message.channel.send("Wow " + message.author.username + "! You actually won! Great job!");
        }
        else {
            message.channel.send("Nope, sorry, " + message.author.username + ", you lost.");
        }
    }
};
