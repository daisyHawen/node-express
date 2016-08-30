var mongoose = require('mongoose')
var blogSchema = require('../schemals/content')
	// var Content = mongoose.model('Content', MovieSchema)
var Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;