var express = require('express');
var router = express.Router();
var Task = require('../models/Post');

router.get('/:id?', function(req, res, next) {

    if (req.params.id) {

        Task.getPostByid(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {

        Task.getAllPosts(function(err, rows) {
            console.log(err, rows);

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

router.post('/', function(req, res, next) {

    Task.addPost(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

router.post('/:id', function(req, res, next) {
    Task.deleteAll(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.delete('/:id', function(req, res, next) {

    Task.deleteTask(req.params.id, function(err, count) {

        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }

    });
});

router.put('/:id', function(req, res, next) {

    Task.updateTask(req.params.id, req.body, function(err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;