var mongoose = require('mongoose');

/*moongoose的所有东西都以schema开始，
 *每个schema对应mongoDB中的collection
 *并且在schema中规定文档类型*/
/*定义文章的schema*/
var blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    comments: [{
        body: String,
        date: Date
    }],
    date: {
        type: Date,
        default: Date.now
    },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

blogSchema.statics.findByName = function(name, cb) {
    this.find({
        author: new RegExp(name, 'i')
    }, cb);
};

blogSchema.statics = {
    fetchAll: function(cb) {
        return this.find({}, cb)

    },
    findByAuthor: function(author, cb) {
        //只取检索到的第一条记录
        return this.findOne({
                'author': author
            }, cb)
            //exec(cb)
    },
    deleteByTitle: function(title, cb) {
        return this.remove({
            'title': title
        }, cb)
    },
    updateById: function(title, body, cb) {
        return this.update({
            'title': title
        }, {
            'body': body
        }, cb)
    }
}

var SequeSchema = mongoose.Schema({
    _id: String,
    sequence_value: Number
});

module.exports = blogSchema;
// module.exports = SequeSchema;