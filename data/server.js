var express = require('express'),
	app = express(),
	url = require('url'),
	fs = require('fs'),
	bodyParser = require('body-parser'),
	scraper = require('product-scraper'),
	SmartCrop = require('smartcrop-node'),
	request = require('request'),
	randomstring = require("randomstring");

var downloadImage = function(input, output, callback){
  request.head(input, function(err, res, body){
    request(input).pipe(fs.createWriteStream(output)).on('close', callback);
  });
};

app.use(bodyParser.urlencoded({ extended: true }));
app.post('/api/product', function(req, res){

	if(req.body && req.body.url)
	{
		scraper.init(req.body.url, function(data){
		
			if(data.image) // @todo need to get image format (validate it's a jpg)
			{
				// res.send(true);
				var inputPath = __dirname + '/images/large/',
					outputPath = __dirname + '/images/thumbs/';

				var filename = randomstring.generate(20) + '.jpg';
				 
				downloadImage(data.image, inputPath + filename, function(){

					SmartCrop.crop({
						
						input: inputPath + filename,
						output: outputPath + filename,
						width: 400,
						height: 400,
						quality: 90

					});
					res.send(true);

				});
			}

		});
	}
	else
	{
		res.status(406).send('Missing url parameter');
	}

});

app.get('/api/product', function(req, res){
	
	var _url = url.parse(req.url, true),
		query = _url.query;

	if(url && query.url) // access basic scrape info
	{
		scraper.init(query.url, function(data){
			res.send(data);
		});
	}
	else // get interal product info (from db)
	{
		
	}

});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});