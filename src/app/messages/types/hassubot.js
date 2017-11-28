module.exports = ( bot, msg ) => {
    const Bot = /Oi bot|Bom dia bot|Boa tarde bot|Boa noite bot|Ola bot| Olá bot/gi
    const Piroca = /piroca/gi

    if ( Bot.test( msg.text ) ) {
        bot.sendMessage( msg.chat.id, 'Bot não. HassuBot!' )
    }

    if ( Piroca.test( msg.text ) ) {
        bot.sendMessage( msg.chat.id, 'GLO GLO GLO GLO!' )
    }
}
