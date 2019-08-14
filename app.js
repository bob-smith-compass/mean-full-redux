var express = require('express');
var chalk = require('chalk');

var app = express();

app.get('/', (req, res) => {
    // console.log(req);
    console.log(req.headers);
    res.send('Express!');
})

let port = 9090;

app.listen(port, () => {
    console.log(`listening on port ${chalk.green(port)}`);
})