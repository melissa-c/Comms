var express = require('express')
var app = express()
var Knex = require('knex')
var knexConfig = require('./knexfile')
var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])
var bodyparser = require('body-parser')
app.use(express.static('client'))
app.use(bodyparser.json())

app.get('/database', function(req,res){
  knex.select().table('gallery')
  .then(function(data){
  	res.send(data)
  })
})
app.post('/database', function(req,res) {
  var writeData = req.body
  var writeData1 = writeData.fileInput
  var writeName1 = writeData.nameInput

  knex.raw('INSERT INTO GALLERY(name, category, filepath) VALUES("'+ writeName1 +'", "personal", "' + writeData1 + '")')
  .then(function(record){
    res.send(record)
  })
})

app.set('port', process.env.PORT || 3000)

var server = app.listen(app.get('port'), function() {
	var port = server.address().port
	console.log('server running on port: ', port)
})
