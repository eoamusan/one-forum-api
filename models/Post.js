var db = require('../dbconnection');

var Task = {

    getAllPosts: function(callback) {
        return db.query("SELECT * FROM post", callback);
    },
    getPostByid: function(id, callback) {
        return db.query("SELECT * FROM post WHERE id=?", [id], callback);
    },
    addPost: function(Task, callback) {
        return db.query("INSERT INTO post VALUES(?,?)", [Task.Title, Task.Status], callback);
    },
    deletePost: function(id, callback) {
        return db.query("DELETE FROM post WHERE id=?", [id], callback);
    },
    updatePost: function(id, Task, callback) {
        return db.query("UPDATE post SET title = ?, status = ? WHERE id = ?", [Task.Title, Task.Status, id], callback);
    }

};
module.exports = Task;