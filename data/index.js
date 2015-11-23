var SmartCrop = require('smartcrop-node');

SmartCrop.crop({
    quality: 90,
    width: 350,
    height: 350,
    input: __dirname + '/test/tomatoes.jpg',
    output: __dirname + '/test/tomatoes-output.jpg'    
});