const { EmbedBuilder } = require("@discordjs/builders");

module.exports = class CorsinhaEmbed {
    constructor({ author, description, image, thumbnail, footer, fields, title, color, authorURL, }) {
        this.author = author;
        this.description = description;
        this.image = image;
        this.thumbnail = thumbnail;
        this.footer = footer;
        this.fields = fields;
        this.title = title;
        this.color = color;
        this.authorURL = authorURL
    }

    get embed() {

        const embed = new EmbedBuilder()
            .setAuthor({ name: this.author, iconURL:this.authorURL ?? "https://images-ext-2.discordapp.net/external/K-oUz4xh-vTqy3DA97ahEZbOiYVVS3RvMLxLTjpsb7c/%3FlastEdited%3D1616514665/https/img.quizur.com/f/img605a0e64bb91e7.52520571.jpg?width=546&height=409" })
            .setColor(this.color ?? 0x0099FF)
            .setDescription(this.description)
            .setFooter(this.footer ?? { text: "© Corsinha 2023", iconURL: "https://media.discordapp.net/attachments/1052329282069872650/1052329371165274132/Pixel_Coin_Blue.png?width=675&height=675" })
            .setTimestamp()
            .setFields(this.fields ?? []);

        return embed;
    }


}