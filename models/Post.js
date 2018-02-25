var db = require('../dbconnection');

var Post = {

    getAllPosts: function(callback) {
        return db.query("SELECT posts.id, title, category, content, userid, name, email FROM posts INNER JOIN users ON posts.userid = users.id", callback);
    },
    getPostByid: function(id, callback) {
        return db.query("SELECT posts.id, title, category, content, userid, name, email FROM posts INNER JOIN users ON posts.userid = users.id WHERE posts.id = ?", [id], callback);
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