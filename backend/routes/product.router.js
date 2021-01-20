const { Router } = require('express');

const { current, showall, showone, removeall, removebyId, create, changestock } = require('../controllers/product.controller')

const router = Router();

router.get('/', current);
router.get('/showall', showall);
router.get('/showone/:id', showone);
router.get('/removeall', removeall);
router.get('/removebyId', removebyId);
router.post('/create', create);
router.post('/changestock', changestock);

module.exports = router