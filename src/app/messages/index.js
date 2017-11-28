const bot = require( '../../config/bot' )

const fifinha    = require( './types/fifinha' )
const meiuca     = require( './types/meiuca' )
const oderbrecht = require( './types/oderbrecht' )
const printi     = require( './types/printi' )
const hassuBot   = require( './types/hassubot' )
const guarulhos  = require( './types/guarulhos' )
const saudacoes  = require( './types/saudacoes' )

bot.on( 'message', ( msg ) => {

    if ( msg.text && msg.text !== null ) {
        fifinha( bot, msg )
        meiuca( bot, msg )
        oderbrecht( bot, msg )
        printi( bot, msg )
        hassuBot( bot, msg )
        guarulhos( bot, msg )
        saudacoes( bot, msg )
    }
})
