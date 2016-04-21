module.exports = function (knex){
  return {

    getAll: function (table, callback){
      knex.raw('select * from ' + table).then(function (resp) {
          callback(null, resp) 
      })
    },

    getSearch: function (table, params, callback){
      var key = Object.keys(params)[0]
      var value = params[key]
      knex.select(key)
        .table('gallery')
        .where(key, params[key])
        .then(function (resp){
          callback(null, resp)
        })
    }
  }
}