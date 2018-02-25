var express = require('express');
var router = express.Router();
var Post = require('../models/Post');

router.get('/:id?', function(req, res, next) {

    if (req.params.id) {

        Post.getPostByid(req.params.id, function(err, rows) {
            if (err) {
                var response = {"_meta":{"status_code": 404, "message": err}};

                res.status(417);
                res.send(response);
            } else {
                var response = {"_meta":{"status_code": 200}, "data": rows};

                res.status(200);
                res.send(response);
            }
        });
    } else {

        Post.getAllPosts(function(err, rows) {
            if (err) {
                var response = {"_meta":{"status_code": 404, "message": err}};

                res.status(417);
                res.send(response);
            } else {

                for (i = 0; i < rows.length; i++) {
                    var row = rows[i];
                    row.comments = [];

                    if(row.comment_id){
                        var comment =   {
                                            id: row.comment_id,
                                            text: row.comment_text,
                                            userid: row.comment_userid,
                                            postid: row.comment_postid,
                                            created_at: row.comment_created_at
                                        };

                        row.comments[0] = comment;
                    }

                    delete row.comment_id;
                    delete row.comment_text;
                    delete row.comment_created_at;
                    delete row.comment_userid;
                    delete row.comment_postid;
                }

                var response = {"_meta":{"status_code": 200}, "data": formatArray(rows)};

                res.status(200);
                res.send(response);
            }

        });
    }
});

function formatArray(arr){
    // console.log(arr);
    var groups = {};

    for (var i = 0; i < arr.length; i++) {
        var groupName = arr[i].id;
        groups[groupName] = arr[i];

        if (!groups[groupName]) {
            groups[groupName]['comments'] = [];
        }

        if(arr[i].comments.length !== 0){
            groups[groupName]['comments'].push(arr[i].comments[0]);
        }

        console.log(groups);
    }

    arr = [];
    for (var groupName in groups) {
        arr.push(groups[groupName]);
    }

    return arr;
}

router.post('/', function(req, res, next) {

    Post.addPost(req.body, function(err, result, fields) {
        if (err) {
            var response = {"_meta":{"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        } else {
            var data = req.body;
            data.id = result.insertId;

            var response = {"_meta":{"status_code": 200}, "data": data};

            res.status(200);
            res.send(response);
        }
    });
});

router.delete('/:id', function(req, res, next) {

    Post.deletePost(req.params.id, function(err, count) {

        if (err) {
            var response = {"_meta":{"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        } else {

            var response = {"_meta":{"status_code": 200}};

            res.status(200);
            res.send(response);
        }

    });
});

router.put('/:id', function(req, res, next) {

    Post.updatePost(req.params.id, req.body, function(err, rows) {

        if (err) {
            var response = {"_meta":{"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        } else {
            var data = req.body;

            var response = {"_meta":{"status_code": 200}, "data": data};

            res.status(200);
            res.send(response);
        }
    });
});

module.exports = router;