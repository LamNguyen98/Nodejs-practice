const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const productRoute = require('./routes/product.route');
const authMiddleware = require('./middlewares/auth.middlewares');

let port = 3000;

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('gdhq29vhkwe12h429l3khs'));

app.use(express.static('public'));

// app.get
app.get('/', (req, res) => {
    res.render('index')
});

app.use('/users', authMiddleware.requireAuth, userRoute)
app.use('/auth', authRoute)
app.use('/products', productRoute)

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});