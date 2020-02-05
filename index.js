let express = require('express');
let app = express();
let port = 3000;

app.get('/', (request, response) => {
    response.send('Hello World');
})

app.listen(port, () => {
    console.log('Server listening on port ' + port);
})