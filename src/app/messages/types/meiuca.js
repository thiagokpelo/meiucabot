module.exports = ( bot, msg ) => {
    const OqueMeiucaFaz = /O que a Meiuca faz\?/gi
    const Meiuca = /meiuca/gi

    if ( OqueMeiucaFaz.test( msg.text ) ) {
        bot.sendMessage( msg.chat.id, 'Essa pergunta é difícil, mas tô contando com ela pra minha aposentadoria!' )

    } else if ( Meiuca.test( msg.text ) ) {
        bot.sendMessage( msg.chat.id, 'Coisa linda de Deus 👌' )
    }
}
