module.exports = ( bot, msg ) => {
    const Printi = /printi/gi

    if ( Printi.test( msg.text ) ) {
        bot.sendMessage( msg.chat.id, 'Mlks deixa comigo que eu lambo o saco do Florian 👅' )
    }
}
