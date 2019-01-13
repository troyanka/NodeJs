const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

const color_logger = require('./utils/color_logger');
const p = color_logger('app');

// const webRouter = require('./routes/web');
// const apiRouter = require('./routes/api');
const usersRouter = require('./routes/users');

const port =  process.env.PORT || 3000;

app.engine('.hbs', exphbs({defaultLayout: 'single', extname: '.hbs'}));
app.set('view engine', '.hbs');

// app.use(express.static(__dirname + '/public'));

// app.use('/',webRouter);
// app.use('/api',apiRouter);
app.use('/users',usersRouter);

app.listen(3000,  ()=> {
   p.green(`Example app listening at localhost:${port}`)
})
