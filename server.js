var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var app = express()



var PORT = process.env.PORT || 8080;

// parse application
app.use(bodyparser.urlencoded({ extended: false }))

// parse json
app.use(bodyparser.json())

require('./FriendFinder/routing/apiRoutes.js')(app);

require('./FriendFinder/routing/htmlRoutes.js')(app);

app.listen(PORT,function()
{
  console.log('Ready to go',PORT);
});