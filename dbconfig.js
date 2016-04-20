var Knex = require('knex')
var config = require ('./knexfile')

module.exports = {
	knex: Knex(config.development),
	config: config

}