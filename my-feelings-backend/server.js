var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001;

var cors = require('cors')

bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

  
var routes = require('./api/routes/myFeelingsRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);