var Request = require('superagent')
//var getDB = require ('./server')

Request
.get('database')
.end(function(err, res){
	console.log(res, 'res')
})