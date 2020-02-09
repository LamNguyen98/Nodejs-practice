let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let users = [
    { id: 1, name: 'Lam' },
    { id: 2, name: 'Linh' }
];

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Lam'
    });
});

app.get('/users', (req, res) => {
    res.render('users/index', { users: users })
});

app.get('/users/search', (req, res) => {
    let q = req.query.q;
    let matchedUser = users.filter((user) => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', {
        users: matchedUser
    });
});

app.get('/users/create', (req, res) => {
    res.render('users/create')
});

app.post('/users/create', (req, res) => {
    users.push(req.body);
    res.redirect('/users')
})


app.listen(port, () => {
    console.log('Server listening on port ' + port);
});