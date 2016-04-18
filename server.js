var express = require('express')
var app = express()
var Knex = require('knex') //This was unused! Why?
var knexConfig = require('./knexfile')
var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

app.use(express.static('client'))
      
console.log('server')

app.get('/database', function(req,res){
  knex.select().table('gallery')
    .then(function(data) {
      res.send(data)
    })
    .catch(function(error) {
      console.log(error);
    })
})

app.set('port', 3000)

//Indentation below
var server = app.listen(app.get('port'), function() {
var port = server.address().port; //sometimes semicolons?
})

