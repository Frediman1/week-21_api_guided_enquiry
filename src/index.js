const express = require('express');
const path = require('path');

const api = express();
api.use(express.static(__dirname + '/public'));


api.listen(3000, () => {
    console.log('API up and running!');
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

