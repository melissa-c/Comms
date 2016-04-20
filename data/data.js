module.exports = function (knex){
  return {


  getCategory: function (table, params, callback){
    var key = Object.keys(params)[0]
    knex.select('category')
      .table('gallery')
      .where('category', params[key])
      .then(function (resp){
        callback(resp)
    })
  },
      
  getName: function (table, params, callback){
   var key = Object.keys(params)[0]
      knex.select('name')
      .table('gallery')
      .where('name', params[key])
      .then(function (resp){
        callback()
      })
    },

    getFilepath: function (table, params, callback){
      var key = Object.keys(params)[0]
        knex.select('filepath')
        .table('gallery')
        .where('filepath', params[key])
        .then(function (resp){
          callback()
        })
    }
  }
}