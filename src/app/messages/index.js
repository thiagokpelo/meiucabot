const bot = require( '../../config/bot' )

const fifinha    = require( './types/fifinha' )
const meiuca     = require( './types/meiuca' )
const printi     = require( './types/printi' )
const hassuBot   = require( './types/hassubot' )
const guarulhos  = require( './types/guarulhos' )
const saudacoes  = require( './types/saudacoes' )
const members    = require( './types/members' )
const merry      = require( './types/merryChristimas' )

const lastMessageInGroup = require( './actions/lastMessageInGroup' )

bot.on( 'message', ( msg ) => {
    if ( msg.text && msg.text !== null ) {
        fifinha( bot, msg )
        meiuca( bot, msg )
        printi( bot, msg )
        hassuBot( bot, msg )
        guarulhos( bot, msg )
        saudacoes( bot, msg )
        members( bot, msg )
        merry( bot, msg )
        // lastMessageInGroup( bot, msg, 'Meiuca' )
    }
})

