module.exports = ( bot, msg ) => {
    const BomDia   = /bom dia|buenos dia|good morning|morning|buenos día/gi
    const BoaTarde = /boa tarde|good afternoon/gi
    const BoaNoite = /boa noite|good evening|good night|buenas noche/gi

    const date  = new Date()
    const hours = date.getHours()

    if ( hours > 0 && hours < 12 ) {
        if ( BomDia.test( msg.text ) )
            bot.sendMessage( msg.chat.id, 'Bom dia jovem! 🌄' )
        else if ( BoaTarde.test( msg.text ) || BoaNoite.test( msg.text ) )
            bot.sendMessage( msg.chat.id, 'Melhor arrumar o relógio amigão!!' )
    }

    if ( hours >= 12 && hours < 19 ) {
        if ( BoaTarde.test( msg.text ) )
            bot.sendMessage( msg.chat.id, 'Bom tarde jovem! 🌅' )
        else if ( BomDia.test( msg.text ) || BoaNoite.test( msg.text ) )
            bot.sendMessage( msg.chat.id, 'Melhor arrumar o relógio amigão!!' )
    }

    if ( hours >= 19 && hours <= 23 ) {
        if ( BoaNoite.test( msg.text ) )
            bot.sendMessage( msg.chat.id, 'Boa noite jovem! 🌃' )
        else if ( BomDia.test( msg.text ) || BoaTarde.test( msg.text ) )
            bot.sendMessage( msg.chat.id, 'Melhor arrumar o relógio amigão!!' )
    }
}
