const Jimp = require('jimp')
const moment = require('moment')

/**
 * From a source image (supported by jimp), it generates a copy and writes some text on top of it.
 * @param sourceImage   Source image to make a copy from
 * @param font  Font file (supported by jimp -> https://www.npmjs.com/package/jimp#writing-text)
 * @param text  The text to write on the image
 * @param outDirectory  The text to write on the image
 * @param options.prefix   Output file name prefix
 * @param options.xpos  Text X axis position
 * @param options.ypos  Text Y axis position
 * @param options.quality   Output image quality
*/
const generator = (sourceImage, font, text, outDirectory, options) => {
    Jimp.read(sourceImage)
        .then(async (voucher) => {
            const clone = voucher.clone()

            const outName = outDirectory 
                + options.prefix
                + moment().format("DD-MM-YYYY-HH-mm-ss")
                + '.'
                + clone.getExtension()

            Jimp.loadFont(font).then(async (font) => {
                clone.print(font, options.xpos, options.ypos, text)
                    .quality(options.quality)
                    .writeAsync(outName)
                    .catch(err => {
                        console.error(err)
                    })

            }).then(() => console.log(`Generated ${outName}`))
        }).catch(err => {
            console.error(err)
        })
}

module.exports = generator