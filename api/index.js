var db = require('./db');
var Product = require('./models/product').model;
var User = require('./models/user').model;


/*var product = new Product({
	title: 'lap desk',
	brand: 'iskelter',
	description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.'
});

product.save(function(err, product){
	if(err) return console.error(err);
});*/
// example of saving data

/*Product.find(function(err, products){
	if(err) return console.error(err);
	console.log(products);
});*/
// example of find query

/*Product.find({ brand: 'iskelter' }, function(err, products){
	if(err) return console.error(err);
	console.log(products);
});*/
// example of find query (with where)