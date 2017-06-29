var express = require('express');
const pool = require('./lib/db');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/data', function(request, response){
  response.write('teste');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

pool.connect( function(err, client, done) {

  if (err) {
    return console.error('error fetching client from pool', err);
  }
  client.query('SELECT * from prestador', function(err, result) {
    //done();
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result);
  });

});

 




