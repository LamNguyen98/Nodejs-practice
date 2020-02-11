const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const low = require('lowdb');
const shortid = require('shortid')
const Filesync = require('lowdb/adapters/FileSync');
const adapter = new Filesync('db.json');

db = low(adapter);

db.defaults({ users: [] })
    .write()

let port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get
app.get('/', (req, res) => {
    res.render('index', {
        name: 'Lam'
    });
});

app.get('/users', (req, res) => {
    res.render('users/index', {
        users: db.get('users').value()
    })
});

app.get('/users/search', (req, res) => {
    let q = req.query.q;
    let matchedUser = db.get("users").filter((user) => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    }).value();
    res.render('users/index', {
        users: matchedUser
    });
});

app.get('/users/create', (req, res) => {
    res.render('users/create')
});

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    let user = db.get('users').find({ id: id }).value();
    res.render('users/view', {
        user: user
    })
})

//app.post
app.post('/users/create', (req, res) => {
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('/users')
})


app.listen(port, () => {
    console.log('Server listening on port ' + port);
});