var express = require('express');
var router = express.Router();
var Comment = require('../models/Comment');

router.get('/:id?', function(req, res, next) {

    Comment.getCommentByid(req.params.id, function(err, rows) {
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
});

router.post('/', function(req, res, next) {

    Comment.addComment(req.body, function(err, result, fields) {
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

    Comment.deleteComment(req.params.id, function(err, count) {

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

    Comment.updateComment(req.params.id, req.body, function(err, rows) {

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