module.exports = ( bot, msg ) => {
    const Words = [
        'bom dia',
        'buenos día',
        'buenos dia',
        'boa tarde',
        'boa noite',
        'buenas noche'
    ]

    const date  = new Date()
    let hours = date.getHours()

    if ( !!extractWord( Words, msg.text ) ) {
        if ( hours > 0 && hours < 12 ) {
            bot.sendMessage( msg.chat.id, `${ extractWord( Words, msg.text ) }, jovem! 👌` )
        }

        if ( hours >= 12 && hours < 19 ) {
            bot.sendMessage( msg.chat.id, `Qualé jovem! Já ta na hora de acender uma vela 🚬` )
        }

        if ( hours >= 19 && hours <= 23 ) {
            bot.sendMessage( msg.chat.id, `Só respondo quando tiver uma brejinha pra mim 🍺` )
        }
    }
}

function extractWord( words, text ) {
    return words.find( ( w, i ) => text.includes( w ) && text[ i ] )
}
