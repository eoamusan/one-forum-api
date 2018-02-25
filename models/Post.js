var db = require('../dbconnection');

var Post = {

    getAllPosts: function(callback) {
        db.query("SELECT posts.id, title, category, content, posts.userid, name, email, comments.text as comment_text, comments.id as comment_id, comments.postid as comment_postid, comments.userid as comment_userid, comments.created_at as comment_created_at FROM posts INNER JOIN users ON posts.userid = users.id LEFT JOIN comments ON comments.postid = posts.id", callback);
    },
    getPostByid: function(id, callback) {
        db.query("SELECT posts.id, title, category, content, posts.userid, name, email, COUNT(comments.text) AS comment_count FROM posts INNER JOIN users ON posts.userid = users.id LEFT JOIN comments ON posts.id = comments.postid WHERE posts.id = ?", [id], function(err, rows){
            var response = rows[0];
            return db.query("SELECT * FROM comments WHERE comments.postid = ?", [rows[0].id], function(err, rows){
                response.comments = rows;
                callback(err, response);
            });
        });
    },
    addPost: function(Post, callback) {
    	var dt = new Date();

        return db.query("INSERT INTO posts(title, category, content, userid, created_at) VALUES(?,?,?,?,?)", [Post.title, Post.category, Post.content, Post.userid, dt], callback);
    },
    deletePost: function(id, callback) {
        return db.query("DELETE FROM posts WHERE id = ?", [id], callback);
    },
    updatePost: function(id, Post, callback) {
        return db.query("UPDATE posts SET title = ?, category = ?, content = ? WHERE id = ?", [Post.title, Post.category, Post.content, id], callback);
    }

};
module.exports = Post;