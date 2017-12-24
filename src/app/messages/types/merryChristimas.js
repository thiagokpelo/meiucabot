const moment = require( 'moment' )

module.exports = ( bot, msg ) => {
    const interval = setInterval( () => {
        if ( moment().isSameOrAfter( '2017-12-25 00:00' ) ) {
            bot.sendMessage( msg.chat.id, 'Feliz Natal seus fofuxossss e fofuxaaaa!!!🎅' )
            clearInterval( interval )
        }
    }, 1000 )
}
