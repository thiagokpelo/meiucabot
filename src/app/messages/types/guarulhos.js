module.exports = ( bot, msg ) => {
    const Guarulhos = /é longe|eh longe|ta longe|muito longe/gi

    if ( Guarulhos.test( msg.text ) ) {
        bot.sendMessage( msg.chat.id, 'xiiiii, pra lá de Guarulhos! 💨 💨 💨' )
    }
}
