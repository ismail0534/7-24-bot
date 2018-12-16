const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '**Botun Tüm Komutları**\n\n\n' + '``f!ailemiz         :: Botun bulunduğu tüm sunucuları gösterir.
f!aşkölçer        :: Aşk Ölçmeni sağlar.
f!ban             :: İstediğiniz kişiyi banlar.
f!bayrak          :: Dene ve Gör :D
f!davet           :: Botun davet linkini gönderir.
f!espri           :: Ne Kadar Komik Eueueueu
f!hazırsunucu     :: Bot için gerekli ayarları kurar.
f!istatistik      :: Botun istatistik gösterir.
f!kick            :: İstediğiniz kişiyi sunucudan atar.
f!kilit           :: Kanalı istediğiniz kadar süreyle kitler.
f!kullanıcıbilgim :: Komutu kullanan kişi hakkında bilgi verir.
f!load            :: Yeni eklenen komutu yükler.
f!mcskin          :: Belirtilen oyuncunun kostümünü gösterir.
f!mcödül          :: Send a Minecraft Achievement image to the channel
f!mesajküçült     :: Mesajınızı küçültür.
f!hd              :: NSFW bir resim g?sterir.
f!ping            :: Botun pingini gösterir.
f!reboot          :: Botu yeniden başlatır.
f!roller          :: Sunucu bilgisini söyler.
f!rol-ver         :: İstediğiniz kişiyi istediğiniz rolü verir.
f!sahip           :: Bütün sahip komutlarını verir.
f!sigaraiç        :: Sigara iÃ§ersiniz.
f!yavaşmod        :: Yavaş Mesaj Atma Sağlar.
f!sor             :: Soru sormaya yarar.
f!sunucubilgi     :: Sunucu hakkında bilgi verir.
f!sunucuresmi     :: Sunucu Resminin Linkini Atar.
f!sustur          :: İstediğiniz kişiyi  susturur.
f!temizle         :: Belirlenen miktar mesajı siler.
f!unban           :: İstediğiniz kişinin banını kaldırır.
f!unload          :: İstediğiniz bir komutu devre dışı bırakır.
f!uyar            :: İstediğiniz kişiyi uyarır.
f!wwegif          :: Rastgele wwe gifi atar.
f!yapımcım        :: Botun Yapımcısını Gösterir
f!yardım          :: Tüm komutları gösterir.
f!yaz             :: İstediğiniz şeyi bota yazdırır.
f!çayiç           :: Çay İçer.
f!çekilişyap      :: çekilişyap.
f!çekiç           :: İstediğiniz Kişiye Çekiç Atarsınız.
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('?')
  .then(r => {
    msg.react('?')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

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
};
