
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('gallery', function(table){
    table.increments()
    table.string('name')
    table.string('category')
    table.string('filepath')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('gallery')
};
