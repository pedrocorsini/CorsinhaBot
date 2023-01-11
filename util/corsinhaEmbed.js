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
        
         if (this.thumbnail) {
            embed.setThumbnail(this.assetLink(this.thumbnail) ?? this.thumbnail);
        }
        if (this.image) {//Caso você esteja passando uma imagem
            embed.setImage(this.assetLink(this.image)/*A imagem faz parte da lista abaixo? Não? Então é uma URL*/ ?? this.image/*Define a imagem pela URL fornecido*/);
        }
        return embed;
    }
    
     assetLink(linkName){
         /**
         * @params {linkName} String nome da imagem
         * A ideia dessa função é ter links "na mão" mais fáceis de acessar, por exemplo, ao invés de eu usar (CorsinhaEmbed({image: "https://cdn.discordapp.com/attachments/1052329282069872650/1052329369890205787/Pixel_Community.png"}).embed eu posso usar apenas CorsinhaEmbed({image: "pixel_community"}).embed
         * Caso você passe uma URL pelo constructor do embed, ele irá passar por essa lista, ver que não ter, retornar null e então colocar a URL direta no image
         * [nomeParaAtribuir]: [Link],
         * Usage: CorsinhaEmbed({image: [nomeParaAtribuir] ou [LinkUrl]
         * Funciona com thumbnail também, mesmo esquema
         * - PewDizinho
         **/
         let links = {
            "pixel_community": "https://cdn.discordapp.com/attachments/1052329282069872650/1052329369890205787/Pixel_Community.png",
            "pixel_store": "https://cdn.discordapp.com/attachments/1052329282069872650/1052329370305450115/Pixel_Store.png",
            "coin_pink": "https://cdn.discordapp.com/attachments/1052329282069872650/1052329370758418552/Pixel_Coin_Pink.png",
            "coin_blue": "https://cdn.discordapp.com/attachments/1052329282069872650/1052329371165274132/Pixel_Coin_Blue.png",
            "coin_green": "https://cdn.discordapp.com/attachments/1052329282069872650/1052329371542769814/Pixel_Coin_Green.png"
         };
         return links[linkName];
     }

}
