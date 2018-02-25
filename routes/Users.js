var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.post('/register', function(req, res, next) {
    User.register(req.body, function(err, result) {
        if (err) {
            var response = {"_meta":{"status_code": 401, "message": err}};

            res.status(401);
            res.send(response);
        } else {
            var response = {"_meta":{"status_code": 200}, "data": req.body};

            res.status(200);
            res.json(response);
        }
    });
});

router.post('/login', function(req, res, next) {
    User.login(req.body, function(err, result) {

        if (err) {

            var response = {"_meta":{"status_code": 404, "message": err}};

            res.status(404);
            res.send(response);

        } else {
            var response = {"_meta":{"status_code": 200}, "data": result};

            res.status(200);
            res.send(response);

        }
    });
});

module.exports = router;