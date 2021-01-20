const { Router } = require('express');
const { current, removeall, showall } = require('../controllers/user.controller');
const { find } = require('../models/user.model');

const router = Router();
router.get('/',current)
router.get('/showall', showall)
router.get('/removeall', removeall)

module.exports = router