module.exports = ( bot, msg ) => {
    const Kpelo = /kd o @kpelo?/gi
    const Giusti = /kd o @paulo?/gi
    console.log( bot )
    console.log( msg )
    console.log( '@' + msg.from.username )
    if ( Kpelo.test( msg.text ) ) {
        bot.sendMessage( msg.chat.id, `Não sei @${msg.from.username}!! Deve estar na MEIUCA fazendo selfie.` )
    }

    if ( Giusti.test( msg.text ) ) {
        bot.sendMessage( msg.chat.id, `@${msg.from.username}!! O Capitão deve ta bolando um e dando enquadro nos coxinhas do RJ` )
    }
}
