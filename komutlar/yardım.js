module.exports={
	name:'yardım',
	aliases:[],
	cooldown:360,
	execute(message,args){
    const Discord=require("discord.js");
    
    const embed = new Discord.MessageEmbed()
    .setTitle("Uptime Bot Yardım Menüsü")
    .setColor("RANDOM")
    .setDescription("e!botekle = Botunuzu eklersiniz \n e!list = Ekli botlarınızı görürsünüz. \n e!botsil = Ekli botunuzu silersiniz.")
    message.channel.send(embed)
  }}