module.exports = ( bot, msg ) => {
    const Fifinha = /fifinha|fifote/gi

    if ( Fifinha.test( msg.text ) ) {
        bot.sendMessage( msg.chat.id, 'Quem é o próximo marreco? 🐤' )
    }
}
