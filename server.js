var express = require('express')
var app = express()
var knex = require('knex')
var pg = require('pg')
var accessDB = 'postgres://testuser:test@localhost/commspics'

var Client = new pg.Client(accessDB)
app.use(express.static('client'))

console.log('server')



function getDB(callback){
	console.log('inside getDB')
	Client.connect(function(err){
		if(err){
			return console.log('connection error', err)
		}
		Client.query('SELECT * FROM gallery', function(err, result){
			if(err){
				return console.log('error reciving data', err)
			} else{
			callback(null, result.rows)
			}
			Client.end()
		})

	})
}

app.get('/database', function(req,res){
  getDB(function(err, data){
  	res.send(data)

  })
})
app.set('port', 3000)
var server = app.listen(app.get('port'), function() {
var port = server.address().port;
})

