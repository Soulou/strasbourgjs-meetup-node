/**
 * @overview
 *
 * @author Léo Unbekandt
 * @version 2015/03/01
 */
require('dotenv').load();

var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', {});
})

var server = app.listen(process.env.PORT, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
})

clean = function() {
  console.log('Got SIGTERM. Clean everything');
  server.close();
};

process.on("SIGINT", clean);
process.on("SIGTERM", clean);
