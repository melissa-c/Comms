var redtape = require('redtape')
var request = require('supertest')

var dbConfig = require('../dbconfig')
var knex = dbConfig.knex

var db = require('../data/data')(knex)


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


test('Test 1/3' , function (t) {
  db.getName('gallery', { name: 'ankle' }, function (err, resp) {
  	t.equal(resp[0].name, 'ankle', 'It got the correct body name ')
  })
  t.end()
})


test('Test 2/3', function (t) {
  db.getCategory('gallery', { category: 'school' }, function (err, resp) {
  	t.equal(resp[0].category, 'school', 'It got the correct category')
  })
  t.end()
})

test('Test 3/3', function (t) {
  db.getFilepath('gallery', { filepath: 'img/pear.png' }, function (err, resp) {
  	t.equal(resp[0].filepath, 'img/pear.png', 'It got the correct filepath for the image')
   })
 t.end()
})
