var mongoose = require('mongoose');
var blogSchema = require('../schemals/content');
// var SequeSchema = require('../schemals/content');/
// var Content = mongoose.model('Content', MovieSchema)
var Blog = mongoose.model('Blog', blogSchema);
// var Sequece = mongoose.model('counter', SequeSchema);
module.exports = Blog;
// module.exports = Sequece;