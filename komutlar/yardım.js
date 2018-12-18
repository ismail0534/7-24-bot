const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '**Bot Hakkında Kısa Bilgi**\n\n\n' + '``.davet`` Botun Davet Linkini Atar',
              '**Yenilikler**\n\n\n' + '``-``  .wwegif = Rastgele wwe gifi atar. \n``-``  .yardım = Tüm komutları gösterir. \n``-``  .çekiç =  İstediğiniz Kişiye Çekiç Atarsınız. \n``-``  .kilit = Komutu Kullandığınız Kanalda Belirttiğiniz Süre Boyunca Yazma Erişimine Kapatır.',
              '**Kullanıcı Ve Eğlence**\n\n\n' + '``-``  .aşkölçer = Aşk Ölçmeni sağlar. \n``-``  .mesajküçült = Mesajınızı Küçültür. \n``-``  .sigaraiç = Sigara, İçersiniz. \n``-``  .bayrak = Dene ve Gör :D \n``-``  .kullanıcıbilgim = Komutu kullanan kişi hakkında bilgi verir. \n``-``  .mcskin = Belirtilen oyuncunun kostümünü gösterir. \n``-``  .mcödül = Minecraft Rasgele Ödül Verir Size. \n``-``  .i  = Botun istatistik gösterir. yada f!istatistik \n``-``  .çekilişyap = Çekiliş Yaparsınız. \n``-``  .çayiç = Çay İçersiniz \n``-``  .yaz = İstediğiniz şeyi bota yazdırır. \n``-``  .ailemiz = Botun bulunduğu tüm sunucuları gösterir. \n``-``  .hd = NSFW bir resim gösterir. \n``-``  .sunucubilgi = Sunucu hakkında bilgi verir. \n``-``  .sunucuresmi = Sunucu Resminin Linkini Atar. \n``-``  .espri = Ne Kadar Komik Eueueueu',
              '**Modarasyon**\n\n\n' + '``-``  .ban = İstediğiniz kişiyi banlar. \n``-``  .hazırsunucu = Bot için gerekli ayarları kurar. \n``-``  .ping = Botun Pingini Gösterir. \n``-``  .kick = İstediğiniz kişiyi sunucudan atar. \n``-``  .rol-ver = İstediğiniz kişiyi istediğiniz rolü verir. \n``-``  .sustur = İstediğiniz kişiyi  susturur. \n``-``  .uyar = İstediğiniz Kişiyi Susturur. \n``-``  .unban İstediğiniz kişinin banını kaldırır. \n``-``  .temizle = Belirlenen miktar mesajı siler. \n``-``  .yavaşmod = Yavaş Mesaj Atma Sağlar. \n``-``  .roller = Sunucudaki Tüm Rolleri Gösterir. \n``-``  .sahip = Bütün Sahip Komutlarını Gösterir.',
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
