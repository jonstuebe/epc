var redis = require("redis"),
    client = redis.createClient(),
    stores = require('./stores');

var passed = function(test){
		console.log('passed', test.title)
		client.set('sites.' + test.title, true);
	},
	failed = function(test){
		console.log('failed', test.title)
		client.set('sites.' + test.title, false);
	};

stores.test(passed, failed);