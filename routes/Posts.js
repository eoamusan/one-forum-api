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
                var response = {"_meta":{"status_code": 200}, "data": rows};

                res.status(200);
                res.send(response);
            }

        });
    }
});

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