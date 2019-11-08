const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const expressHbs = require('express-handlebars');

const sequelizedb = require('./Util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');


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

app.use((req, res, next) => {
    User.findByPk(1)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => {
            console.log(err)
        });

});

app.use(adimnRouter);
app.use(shopRouter);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);

User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });


sequelizedb.sync()
//sequelizedb.sync({ force: true })
    .then(result => {
        //console.log(result);
        return User.findByPk(1);
    })
    .then(user => {
        if (!user) {
            return User.create({
                name: 'Anuj',
                email: 'anuj@gmail.com'
            });
        }
        return user;
    })
    .then(user => {
        //console.log(user);
        return user.createCart();

    })
    .then(cart => {
        app.listen(8081);
    })
    .catch(err => {
        console.log(err);
    });

