let express = require('express');

const controller = require('../controllers/user.controller')

let router = express.Router();

//router.get
router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.getId);

//router.post
router.post('/create', controller.postCreate);



module.exports = router;