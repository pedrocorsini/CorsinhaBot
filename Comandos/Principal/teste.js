const Discord = require("discord.js")
const { options } = require("../..")

module.exports = {
  name: "teste", // Coloque o nome do comando
  description: "o leo é gay", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    const embed = new Discord.EmbedBuilder()
      .setTitle('teste')
      .setDescription('o leo é gay')
      .setFooter({ text: 'Gay' })
      .setColor("Random")

    interaction.reply({ embeds: [embed] })

  }
}