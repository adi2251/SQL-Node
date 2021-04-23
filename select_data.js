const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    database: 'mytestdb',
    password: 'mypass'
});

connection.query(
    `SELECT * FROM persons`,
    (err ,results , fields) => {
        if (err)console.error(err);
        else {
            console.log(results); // used to print rows !
            console.log(fields); //
        }
        connection.close() ;
    }
);