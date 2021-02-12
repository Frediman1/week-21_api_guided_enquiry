const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Mysql Connections
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Fredricklove1',
    database: 'todo'
});
// red flag for mysql connection
try {
    connection.connect();
} catch (e) {
    console.log('Oops. Connection to MySQL failed.');
    console.log(e);
}




const api = express();
api.use(express.static(__dirname + '/public'));
api.use(bodyParser.json());


api.listen(3000, () => {
    console.log('API up and running!');
});


// post method 
api.post('/add', (req, res) => {
    console.log(req.body);

    connection.query('INSERT INTO tasks (description) VALUES (?)', [req.body.item], (error, results) => {
        if (error) return res.json({ error: error });
        connection.query('SELECT LAST_INSERT_ID() FROM tasks', (error, results) => {
            if (error) return res.json({ error: error });
            console.log(results);
        });
    });
});






// api.get('/', (req, res) => {
//     console.log(req);
//     res.send('Hello, world!');
// });
// serving our Todo List App
// api.use((req, res, next) => {
//     console.log('Hello');
//     next();
// });

