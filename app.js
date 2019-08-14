var express = require('express');
var chalk = require('chalk');
var morgan = require('morgan');

var app = express();

app.use(morgan('combined'));

app.get('/', (req, res) => {
    // console.log(req);
    console.log(req.headers);
    res.send('Express!');
})

let port = 9090;

app.listen(port, () => {
    // console.log(`listening on port ${chalk.green(port)}`);
    console.log(`listening on port ${chalk.green(port)}`);
})