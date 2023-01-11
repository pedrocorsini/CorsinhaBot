const { dayInMs } = require("const-ms");
const Discord = require("discord.js");
const CorsinhaEmbed = require("../../util/corsinhaEmbed");

module.exports = {
  name: "sugerir", // Coloque o nome do comando
  description: "Faça sua sugestão.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: "sugestão",
      description: "Escreva algo.",
      type: Discord.ApplicationCommandOptionType.String,
      required: true,
    }
  ],

  run: async (client, interaction) => {
    let canal = interaction.guild.channels.cache.get("722586465707491333") // Canal de sugestões do servidor
    if (canal) {
         let sugestao = interaction.options.getString("sugestão");
      canal.send({
        embeds: [
          new CorsinhaEmbed({
            author: interaction.user.username,
            authorURL: interaction.user.displayAvatarURL({ dynamic: true }),
            thumbnail: interaction.guild.iconURL({ dynamic: true }),
            title: "Nova sugestão!",
            description: `**Sugestão de ${interaction.user}:**\n${sugestao}`,
          }).embed
        ]
      }).then(() => {
        interaction.reply({ content: `Olá ${interaction.user}, sua sugestão foi publicada em ${canal} com sucesso.` })
      }).catch(() => {
        interaction.reply({ content: `Ops ${interaction.user}, algo deu errado!` })
      })
    } else {
        interaction.reply({
        content: "", embeds: [
          new CorsinhaEmbed({ author: interaction.user.username, description: `Olá ${interaction.user}, o canal de sugestões ainda não foi configurado no script!`, }).embed
        ], ephemeral: true
      })

    }
  }
}