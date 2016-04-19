var express = require('express')
var app = express()
var Knex = require('knex')
var knexConfig = require('./knexfile')
var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

app.use(express.static('client'))

app.get('/database', function(req,res){
  knex.select().table('gallery')
  .then(function(data){
  	res.send(data)
  })
  .catch(function(error){
  	console.log("Error: ", error)
  })
})

app.get('/database/recent', function(req,res){
  knex.update().table('recentChoice')
  .where('id', '=', 1)
  .then(function(data){
  	res.send(data)
  })
  .catch(function(error){
  	console.log("Error: ", error)
  })
})

app.set('port', process.env.PORT || 3000)

var server = app.listen(app.get('port'), function() {
	var port = server.address().port
})


