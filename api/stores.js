exports.test = function(passed, failed){

	var scraper = require('product-scraper'),
		Mocha = require('mocha');

	var mocha = new Mocha({ reporter: function(){} });
	mocha.addFile(__dirname + '/test/test.js');
	
	if(!passed && !failed)
	{
		console.log('must pass pass and fail callback functions');
		return false;
	}

	var theTest = function(){
		
		mocha.run()
			.on('pass', passed)
			.on('fail', failed)

	};

	theTest();

}