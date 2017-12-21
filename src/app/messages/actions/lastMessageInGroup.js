module.exports = ( bot, msg, group ) => {
	if ( msg.chat.title === group ) {
		const now = convertTimestampToMilliseconds( msg.date )
		const maxTime = new Date( now + millisecondsToMinutes( 120 ) )
		
		const interval = setInterval( function() {
			if ( isTimeGreaterThanMaxTime( new Date(), maxTime ) ) {
				bot.sendMessage( msg.chat.id, 'não deixe o grupoo morrerrrrrrr 🎶' )
				clearInterval( interval )
			}
		}, millisecondsToMinutes( 30 ) )
	}
}

function convertTimestampToMilliseconds( timestamp ) {
	return timestamp * 1000
}

function isTimeGreaterThanMaxTime( time, maxTime ) {
	return time >= maxTime
}

function millisecondsToMinutes( milliseconds ) {
	return milliseconds * 1000 * 60
}
