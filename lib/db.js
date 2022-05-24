var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Poprost@22",
    database: "library"
});

conn.connect((err) => {
    if (!err) {
        console.log('Connected to database successfully');
    } else {

        console.log('Failed to connect to database' + JSON.stringify(err, ));

    }
})
module.exports = conn;