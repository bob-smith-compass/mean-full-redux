var express = require('express');

var app = express();

app.get('/', (req, res) => {
    console.log(req);
    res.send('Express!');
})

let port = 9090;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})