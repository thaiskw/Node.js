const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');

router.get('/', cursoController.listar);
router.get('/create', cursoController.formCreate);
router.post('/create', cursoController.create);

module.exports = router;