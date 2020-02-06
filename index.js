let express = require('express');
let app = express();
let port = 3000;

app.set('view engine', 'pug');
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Lam'
    });
})

app.get('/users', (req, res) => {
    res.render('users/index', {
        users: [
            { id: 1, name: 'Lam' },
            { id: 2, name: 'Linh' }
        ]
    });
})

app.listen(port, () => {
    console.log('Server listening on port ' + port);
})