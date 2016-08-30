/**
 * Created by Administrator on 2016/2/26.
 */
/*用于处理路由*/
/*模拟数据*/
// var Content = require('./models/content')

var items = [{
	tittle: "文章1"
}, {
	tittle: "文章2"
}];
// var contents = Content.fetch();
// console.log(contents);

exports.index = function(req, res) {
	res.render("index", {
		tittle: "文章列表",
		items: items
	})
}
exports.form = function(req, res) {
	res.render("form", {
		tittle: "发表文章",
		message: "你好厉害啊"
	})
}
exports.create = function(req, res) {
	//数据库处理
	console.log(req.body) //需要body-parser() 否则就是undefined
		//对请求的body做处理，接收表单
	var newitems = req.body.tittle
	console.log(newitems)
	items.push({
		tittle: newitems
	})
	res.redirect("/")
}