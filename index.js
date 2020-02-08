let express = require('express');
let app = express();
let port = 3000;

app.set('view engine', 'pug');
app.set('views', './views')

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

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});