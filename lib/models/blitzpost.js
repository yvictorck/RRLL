// // grab the mongoose module
// var mongoose = require('mongoose');

// // define our nerd model
// // module.exports allows us to pass this to other files when it is called
// module.exports = mongoose.model('Nerd', {
// 	name : {type : String, default: ''}
// });
'use strict';



var mongoose = require('mongoose');

var BlitzPostSchema = new mongoose.Schema({
  gametime: String,
  kyung : [Number],
  mina : [Number],
  jess : [Number],
  vic : [Number]
});

mongoose.model('Blitz', BlitzPostSchema);
