const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
	await imagemin(['images/*.png'], {
		destination: 'build/images',
		plugins: [
            imageminPngquant({ quality: [0, 0.05] })
		]
	});

	console.log('Images optimized');
})();

// suivre le tuto : 
// https://github.com/imagemin/imagemin-pngquant#readme

// installer le plugin :
// npm install imagemin-pngquant

// npm run "nomScript"
// https://oncletom.io/node.js/chapter-05/#run