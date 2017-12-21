module.exports = ( bot, msg ) => {
    const BomDia   = /bom dia|buenos dia|good morning|morning|buenos día/gi
    const BoaTarde = /boa tarde|good afternoon/gi
    const BoaNoite = /boa noite|good evening|good night|buenas noche/gi

    const date  = new Date()
    let hours = date.getHours()

    if ( BomDia.test( msg.text ) || BoaTarde.test( msg.text ) || BoaNoite.test( msg.text ) ) {
        if ( hours > 0 && hours < 12 )
            bot.sendMessage( msg.chat.id, `${ msg.text }, jovem! 👌` )

        if ( hours >= 12 && hours < 19 )
            bot.sendMessage( msg.chat.id, `Qualé jovem! Já ta na hora de acender uma vela 🚬` )

        if ( hours >= 19 && hours <= 23 )   
            bot.sendMessage( msg.chat.id, `Só respondo quando tiver uma brejinha pra mim 🍺` )
    }
}
