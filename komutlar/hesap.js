const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents



exports.run = function(client, message, args) {
    var soru = args.join(' ');

    if(!soru) return message.reply(' :x: Bir İşlem Belirtin. **Doğru Kullanım**: pe!hesapla <işlem>')
    else { let cevap;
        try {
            cevap = math.eval(soru)
        } catch(err) {
            message.channel.send(' :x:  Hatalı İşlem: **' + err)
        }

        const embed = new Discord.RichEmbed()
        .addField('Soru', soru)
        .addField('Cevap', cevap)
        .setColor('#7489DA')
        .setFooter('DvE', client.user.avatarURL)

        message.channel.send(embed)
    }


};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hesapla',
  description: 'Belirtilen işlemi yapar.',
  usage: 'hesapla <işlem>'
};