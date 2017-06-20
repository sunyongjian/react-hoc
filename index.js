const express = require('express');
const path = require('path');
const config = require('./config');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
  res.sendFile(path.resolve(__dirname + '/public/index.html'));
});

app.listen(config.port, function() {
  console.log('listen:', config.port);
});
