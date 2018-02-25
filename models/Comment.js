var db = require('../dbconnection');

var Comment = {

    getCommentByid: function(id, callback) {
        return db.query("SELECT comments.id, title, category, content, userid, name, email FROM comments INNER JOIN users ON comments.userid = users.id WHERE comments.id = ?", [id], callback);
    },
    addComment: function(Comment, callback) {
    	var dt = new Date();

        return db.query("INSERT INTO comments(text, postid, userid, created_at) VALUES(?,?,?,?)", [Comment.text, Comment.postid, Comment.userid, dt], callback);
    },
    deleteComment: function(id, callback) {
        return db.query("DELETE FROM comments WHERE id = ?", [id], callback);
    },
    updateComment: function(id, Comment, callback) {
        return db.query("UPDATE comments SET text = ? WHERE id = ?", [Comment.text, id], callback);
    }

};
module.exports = Comment;