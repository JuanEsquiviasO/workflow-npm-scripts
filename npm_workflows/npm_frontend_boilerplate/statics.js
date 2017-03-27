const copy = require('copy');

copy(
	'./src/statics/*.*',
	'./dist', (err, file) => (err) ? console.log(err) : console.log('Files copied successfully')
);