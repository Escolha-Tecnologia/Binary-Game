var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.post('/www', function(request, response) {
    response.sendFile(__dirname + '/public/www/index.html');
});

app.get('/', function(request, response) {
  response.send("Oi");
});

app.listen(app.get('port'), function() {
  console.log("Node:" + app.get('port'));
});
