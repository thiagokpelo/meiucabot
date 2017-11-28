const bot = require( '../../config/bot' )

const newChatMembers  = require( './events/newChatMembers' )
const leftChatMembers = require('./events/leftChatMembers')

bot.on( 'new_chat_members', ( msg ) => {
    newChatMembers( bot, msg )
})

bot.on('left_chat_members', ( msg ) => {
    leftChatMembers( bot, msg )
})
