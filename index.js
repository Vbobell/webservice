var express = require('express');
var pg = require('pg');
var conString = "postgres://szjrxhnyhfdvog:375e1eaae56772ecf7ba1b1ac4522552999b8f45458a4f99d6552da8a72221d4@ec2-107-22-250-33.compute-1.amazonaws.com:5432/d15ia3a4j471m";
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  pg.connect(conString, function(err, client, done) {

  if (err) {
    return console.error('error fetching client from pool', err);
  }
  client.query('SELECT $1::int AS number', ['1'], function(err, result) {
    done();
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].number);
  });

});
});





