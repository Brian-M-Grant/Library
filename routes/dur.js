var express = require('express');
var router = express.Router();
var conn = require('../lib/db');

router.get('/time', function(req, res, next) {
    if (req.session.loggedin === true) {
        var mySql = "SELECT * FROM duration";

        conn.query(mySql, function(err, rows) {
            if (err) {
                console.log(err)
            } else {
                res.render('dur', {
                    data: rows
                })
            }
        })
    } else {
        res.redirect('/login/login')
    }

})
module.exports = router;