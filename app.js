/**
 * Created by Administrator on 2016/2/26.
 */
var express = require("express");
var routes = require("./routes");
var app = express();
var bodyParser = require('body-parser')
	/*数据库相关*/

// var mongoose = require('mongoose');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Blog = require('./models/content.js')
	// var Content = mongoose.model('Content', {
	// 	name: String,
	// 	title: String,
	// 	id: String
	// });

var newcnt = new Blog({
	_id: getNextSequenceValue('productid')
	title: "文章三",
	author: "daisy",
	body: "文章内容",
	// date: Date(),
	hidden: false
});
// newcnt.save(function(err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('数据插入成功');
// 	}
// });
function getNextSequenceValue(sequenceName) {
	var sequenceDocument = db.counters.findAndModify({
		query: {
			_id: sequenceName
		},
		update: {
			$inc: {
				sequence_value: 1
			}
		},
		new: true
	});
	return sequenceDocument.sequence_value;
}

Blog.fetchAll(function(err, blog) {
	console.log("fetch");
});
Blog.findByAuthor('daisy', function(err, blog) {
	console.log(blog);
});
// Blog.deleteByTitle("文章一", function(err) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log("success");
// 		}
// 	})
// Blog.updateById('文章三', 'mongodb', function(err, cb) {
// 		console.log("updateById");
// 		console.log(cb);
// 	})
var o = {};
o.map = function() {
	emit(this.name, 1)
}
o.reduce = function(k, vals) {
	return vals.length
}
User.mapReduce(o, function(err, results) {
		console.log(results)
	})
	/*设置引擎*/
app.set("view engine", 'ejs');
app.use(express.static(__dirname + "/static"))
app.use(bodyParser())
app.get("/", routes.index);
app.get("/form", routes.form);
app.post("/form/new", routes.create); //当点击提交的时候转到routes.create

app.listen(1337, '127.0.0.1', function() {
	console.log("开始监听..........")
})