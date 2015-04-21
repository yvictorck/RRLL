'use strict';

var mongoose = require('mongoose'),
  Blitzpost = mongoose.model('Blitz');



/**
 * List of Blogs
 */
exports.all = function(req, res) {
  Blitzpost.find(function (err, blitzposts) {   
    if (err) return next(err);
    console.log(blitzposts);
    res.json(blitzposts);
  });
};


/**
 * Create a blog
 */
exports.create = function(req, res) {

console.log('in blitz route',req.body);
  Blitzpost.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });

};
