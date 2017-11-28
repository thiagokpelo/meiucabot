module.exports = ( bot, msg ) => {
    if ( msg.new_chat_member ) {
        const name = msg.new_chat_member.first_name

        bot.sendMessage(msg.chat.id, `Ola ola ${name}, seja bem vindo amiguinho! 👏`)
    }
}
