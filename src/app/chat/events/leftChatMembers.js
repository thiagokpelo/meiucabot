module.exports = ( bot, msg ) => {
    if ( msg.left_chat_member ) {
        const name = msg.left_chat_member.first_name

        bot.sendMessage(msg.chat.id, `O ${name} saiu? Deixa, ele era pato no Fifote mesmo!`)
    }
}
