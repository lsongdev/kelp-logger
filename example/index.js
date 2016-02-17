'use strict';
const http   = require('http');
const kelp   = require('kelp');
const logger = require('../');

const app = kelp();

app.use(logger);

app.use(function(req, res){
  res.end('Kelp logger !');
});

http.createServer(app).listen(3000);
