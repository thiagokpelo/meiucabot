const TelegramBot = require( 'node-telegram-bot-api' )
const TOKEN       = require( './env' ).token
const bot         = new TelegramBot( TOKEN, { polling : true } )

module.exports = bot
