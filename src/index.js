const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');


// settings
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));

//app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

// routes
app.use(require('./routes'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// listening the Server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
