var redtape = require('redtape')
var request = require('supertest')

var dbConfig = require('../dbconfig')
var knex = dbConfig.knex
//console.log(dbConfig)

var db = require('../data/data')(knex)
//var app = App(db)

var testData = {id: 2, name: 'back', category: 'body', filepath: 'img/back.png'}

var test = redtape({
	beforeEach: function (cb) {
		return knex.migrate.latest(dbConfig.config)
		.then(function (){
			return knex.select('*').from('gallery')
		})
		.then(function () {
			cb()
		})
	},

	afterEach: function (cb) {
		knex.migrate.rollback(dbConfig.config)
			.then(function() {
				cb ()
			})
	}
})

test ('simple test', function (t) {
	console.log('test reached here')
	db.getAll('gallery', function(err, resp) {
		console.log(resp)
		Object.keys('gallery').forEach (function (key) {
			
			console.log(key)

		})
		t.end()
	})
})

test('it gets a particular body name ', function (t) {
  db.getOne('gallery', { id: 1 }, function (err, resp) {
  	console.log(resp)
    //t.equal(resp.name, 'ankle', 'it got the body name ')
    t.end()
  })
})
