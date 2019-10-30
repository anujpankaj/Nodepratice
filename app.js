const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();
/*app.engine('hbs', expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
}));
app.set('view engine', 'hbs');*/
//app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views', 'views');

const adimnRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const rootDir = require('./Util/path');
const errorController = require('./controllers/error');

app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

app.use(adimnRouter);
app.use(shopRouter);

app.use(errorController.get404);

app.listen(8081);