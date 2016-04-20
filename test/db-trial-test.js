var redtape = require('redtape')
var request = require('supertest')

var App = require('../server')
var dbConfig = require('../dbconfig')
var knex = dbConfig.knex
console.log(dbConfig)

var db = require('../data/data')(knex)
//var app = App(db)

var testData = {id: 2, name: 'back', category: 'body', filepath: 'img/back.png'}

// var test = redtape({
// 	beforeEach: function (cb) {
// 		return knex.migrate.latest(dbConfig.config)
// 		.then(function (){
// 			return knex('gallery').insert(testData)
// 		})
// 		.then(function () {
// 			cb()
// 		})
// 	},

// 	afterEach: function (cb) {
// 		knex.migrate.rollback(dbConfig.config)
// 			.then(function() {
// 				cb ()
// 			})
// 	}
// })


// test('setup', function (t) {
// 	knex.migrate.rollback(dbConfig.config)
// 	.then(function () {
// 		t.end()
// 	})
// })

test ('It get the images', function (t) {
	request (db)
	.get('/database')
	.expect(200)
	.end(function (err, res) {
		t.ok(res.body.length)

	})
	t.end()

})