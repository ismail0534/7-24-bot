    client.on('message', async msg => {
    if (msg.content.toLowerCase() === prefix + "rainbow") {
   if (msg.channel.type === "dm") return;
  const rol = 'Rainbow' // Rainbow
  setInterval(() => {
      msg.guild.roles.find(s => s.name === rainbow).setColor("RANDOM")
      }, 9000);
  }
})ra
