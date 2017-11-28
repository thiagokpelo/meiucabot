module.exports = ( bot, msg ) => {
    const Oderbrecht = /oderbrecht/gi

    if ( Oderbrecht.test( msg.text ) ) {
        bot.sendMessage( msg.chat.id, 'É igual pegar GORDA vai ficar uma mancha na alma! 😈' )
    }
}
