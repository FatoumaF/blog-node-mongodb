const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    articleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Article', required: true },
    userName: { type: String, required: true },
    content: { type: String, required: true },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
