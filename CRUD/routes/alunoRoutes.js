const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

// Listar todos os alunos
router.get('/', alunoController.listar);

// Formulário para criar novo aluno
router.get('/create', alunoController.formCreate);

// Enviar novo aluno
router.post('/create', alunoController.create);

module.exports = router;