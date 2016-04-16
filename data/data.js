module.exports = function (knex){
  return {

    //----show all imgs
    //raw sql: SELECT filepath FROM gallery
    getAll: function (table, callback){
      knex.select('filepath')
        .table('gallery')
        .then(function(resp){
          callback(null, resp)
        })
    },

    //----show imgs by chosen category
    //raw sql: SELECT filepath FROM gallery WHERE category = 'food'
    getCategory: function (table, params, callback){
      var key = Object.keys(params)[0]
      knex.select('filepath')
        .table('gallery')
        .where('category', params[key])
        .then(function (resp){
          callback(null, resp)
        })
    },

    //----show img chosen
    //raw sql: SELECT filepath FROM gallery WHERE id = 10 
    getOne: function (table, params, callback){
      var key = Object.keys(params)[0]
      knex.select('filepath')
        .table('gallery')
        .where(key, params[key])
        .then(function (resp){
          callback(null, resp[0])
        })
    }

  }
}