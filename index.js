var express = require('express')
var bodyParser =require('body-parser')
var path = require('path')
var http= require('http')
var port = process.env.PORT || 8080

var app = express()
var server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

if (require.main === module) {
	server.listen(port, function(){
		console.log('Coms server listening on port: ', port)

	})

}

module.exports =app