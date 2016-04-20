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
		knex.migrate.latest(dbConfig.config)
			.then(function() {
				cb ()
			})
	}
})


test('it gets a particular body name ', function (t) {
  db.getName('gallery', { name: 'ankle' }, function (err, resp) {
  	t.equal(resp[0].name, 'ankle', 'it got the correct body name ')
  })
  t.end()
})


test('it gets a particular category ', function (t) {
  db.getCategory('gallery', { category: 'school' }, function (err, resp) {
  	t.equal(resp[0].category, 'school', 'it got the correct category')
  })
  t.end()
})

test('it gets a particular filepath ', function (t) {
  db.getFilepath('gallery', { filepath: 'img/pear.png' }, function (err, resp) {
  	t.equal(resp[0].filepath, 'img/pear.png', 'it got the correct filepath')
   })
 t.end()
})
