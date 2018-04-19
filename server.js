const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/video_game_routes');

const port = 3000;

const app = express();

app.use(function(request, response, next) {
  // Website you wish to allow to connect
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  response.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/api', api);

app.listen(port, function() {
  console.log("Server running on port: " + port);
})
