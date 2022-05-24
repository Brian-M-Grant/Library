var express = require('express');
const { search } = require('../app');
const conn = require('../lib/db');
var router = express.Router();
var app = express();
router.get('/', function(req, res, next) {
    let varSql = "SELECT * FROM books";
    conn.query(varSql, function(err, rows) {
        if (err) {
            console.log(err)
        } else {
            res.render('index', {
                data: rows
            });
        }
    })



});
/*app.get('/search', function(req, res) {
    conn.query('SELECT * WHERE book_nm LIKE "%' + req.query.key + '%"',
        function(err, rows, fields) {
            if (err) throw err;
            var data = [];
            for (i = 0; i < rows.length; i++) {
                data.push(rows[i].book_nm);
            }
            res.end(JSON.stringify(data));
        })
})
*/


module.exports = router;