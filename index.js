const generator = require('./lib/generator')

const options = {
	prefix: 'out_',
	xpos: 560,
	ypos: 705,
	quality: 75,
}

generator(
	'images/placeholder.png',
	'fonts/whitney-medium-58.fnt',
	'THIS IS MY SAMPLE TEXT',
	'images/output',
	options
)