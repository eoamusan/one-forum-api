var db = require('../dbconnection');
var fs = require('fs');
var md5 = require('md5');

var User = {
    login: function(User, callback) {        
        db.query("SELECT * FROM users WHERE email = ? AND password = ?", [User.email, md5(User.password)], function(err, result, fields){
            if(result.length == 0){
                return callback('Incorrect user credentials');
            }else{
                return callback(null, result);
            }
        });
    },
    register: function(User, callback) {
        var dt = new Date();

        db.query("SELECT * FROM users WHERE email = ?", [User.email], function(err, result, fields){
            if(result.length == 0){
                return db.query("INSERT INTO users(name, email, password, created_at) VALUES(?,?,?,?)", [User.name, User.email, md5(User.password), dt], callback);
            }else{
                return callback('User email already used');
            }
        });

        
    }
};

module.exports = User;