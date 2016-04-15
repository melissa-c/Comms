
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('gallery').del(), 

    // Inserts seed entries
    knex('gallery').insert({id: 1, name: 'ankle', category: 'body', filepath: 'convertedImages/body/ankle.png'}),
    knex('gallery').insert({id: 2, name: 'back', category: 'body', filepath: 'convertedImages/body/back.png'}),
    knex('gallery').insert({id: 3, name: 'ear', category: 'body', filepath: 'convertedImages/body/ear.png'}),
    knex('gallery').insert({id: 4, name: 'head', category: 'body', filepath: 'convertedImages/body/head.png'}),
    knex('gallery').insert({id: 5, name: 'leg', category: 'body', filepath: 'convertedImages/body/leg.png'}),
    knex('gallery').insert({id: 6, name: 'afraid', category: 'emotions', filepath: 'convertedImages/emotions/afraid.png'}),
    knex('gallery').insert({id: 7, name: 'bad', category: 'emotions', filepath: 'convertedImages/emotions/bad.png'}),
    knex('gallery').insert({id: 8, name: 'cry', category: 'emotions', filepath: 'convertedImages/emotions/cry.png'}),
    knex('gallery').insert({id: 9, name: 'hate', category: 'emotions', filepath: 'convertedImages/emotions/hate.png'}),
    knex('gallery').insert({id: 10, name: 'laugh', category: 'emotions', filepath: 'convertedImages/emotions/laugh.png'}),
    knex('gallery').insert({id: 11, name: 'like', category: 'emotions', filepath: 'convertedImages/emotions/like.png'}),
    knex('gallery').insert({id: 12, name: 'bathe', category: 'home', filepath: 'convertedImages/home/bathe.png'}),
    knex('gallery').insert({id: 13, name: 'bathroom', category: 'home', filepath: 'convertedImages/home/bathroom.png'}),
    knex('gallery').insert({id: 14, name: 'bedTime', category: 'home', filepath: 'convertedImages/home/bedTime.png'}),
    knex('gallery').insert({id: 15, name: 'brushHair', category: 'home', filepath: 'convertedImages/home/brushHair.png'}),
    knex('gallery').insert({id: 16, name: 'brushTeeth', category: 'home', filepath: 'convertedImages/home/brushTeeth.png'}),
    knex('gallery').insert({id: 17, name: 'family1', category: 'home', filepath: 'convertedImages/home/family1.png'}),
    knex('gallery').insert({id: 18, name: 'toyTrain', category: 'home', filepath: 'convertedImages/home/toyTrain.png'}),
    knex('gallery').insert({id: 19, name: 'car', category: 'outside', filepath: 'convertedImages/outside/car.png'}),
    knex('gallery').insert({id: 20, name: 'leaf', category: 'outside', filepath: 'convertedImages/outside/leaf.png'}),
    knex('gallery').insert({id: 21, name: 'leave', category: 'outside', filepath: 'convertedImages/outside/leave.png'}),
    knex('gallery').insert({id: 22, name: 'trampoline', category: 'outside', filepath: 'convertedImages/outside/trampoline.png'}),
    knex('gallery').insert({id: 23, name: 'tree', category: 'outside', filepath: 'convertedImages/outside/tree.png'}),
    knex('gallery').insert({id: 24, name: 'bakedPotato', category: 'random', filepath: 'convertedImages/random/bakedPotato.png'}),
    knex('gallery').insert({id: 25, name: 'eat2', category: 'random', filepath: 'convertedImages/random/eat2.png'}),
    knex('gallery').insert({id: 26, name: 'artClass1', category: 'school', filepath: 'convertedImages/school/artClass1.png'}),
    knex('gallery').insert({id: 27, name: 'circleTime', category: 'school', filepath: 'convertedImages/school/circleTime.png'}),
    knex('gallery').insert({id: 28, name: 'count', category: 'school', filepath: 'convertedImages/school/count.png'}),
    knex('gallery').insert({id: 29, name: 'lunchTime', category: 'school', filepath: 'convertedImages/school/lunchTime.png'}),
    knex('gallery').insert({id: 30, name: 'pencilSharpener', category: 'school', filepath: 'convertedImages/school/pencilSharpener.png'}),
    knex('gallery').insert({id: 31, name: 'listen', category: 'verbs', filepath: 'convertedImages/verbs/listen.png'}),
    knex('gallery').insert({id: 32, name: 'see', category: 'verbs', filepath: 'convertedImages/verbs/see.png'}),
    knex('gallery').insert({id: 33, name: 'sick', category: 'verbs', filepath: 'convertedImages/verbs/sick.png'}),
    knex('gallery').insert({id: 34, name: 'smell', category: 'verbs', filepath: 'convertedImages/verbs/smell.png'}),
    knex('gallery').insert({id: 35, name: 'touch', category: 'verbs', filepath: 'convertedImages/verbs/touch.png'})
  );
};
