var redtape = require('redtape')
var request = require('supertest')
var level = require('level')
var rimraf = require('rimraf')


var dbConfig = require('../dbconfig')

var knex = dbConfig.knex
var db = require('../data/data')(knex)


var testData = {id: 2, name: 'back', category: 'body', filepath: 'img/back.png'}

var test = redtape({
	beforeEach: function (cb) {
		rimraf.sync('db')
		level ('db', cb)
		// return knex.migrate.latest(dbConfig.config)
		// .then(function (){
		// 	return knex.select('*').from('gallery')
		// })
		// .then(function () {
		 //	cb()
		// })
	},

	afterEach: function (db, cb) {
		db.close(cb)
		// knex.migrate.latest(dbConfig.config)
		// 	.then(function() {
				
			// })
	}
})



test('DB Test ' , function (t, err) {
 	db.getSearch('gallery', { name: 'ankle' }, function (err, resp) {
  		t.equal(resp[0].name, 'ankle', '1/3 It got the correct body name ')
  }),

 	db.getSearch('gallery', { category: 'school' }, function (err, resp) {
  		t.equal(resp[0].category, 'school', '2/3 It got the correct category')
  }), 
	
	db.getSearch('gallery', { filepath: 'img/pear.png' }, function (err, resp) {
  		t.equal(resp[0].filepath, 'img/pear.png', '3/3 It got the correct filepath for the image')
   })

  t.end(err)
})


