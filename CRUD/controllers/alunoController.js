const alunos = []; // apenas simulação em memória

exports.listar = (req, res) => {
  res.render('alunos/index', { alunos });
};

exports.formCreate = (req, res) => {
  res.render('alunos/create');
};

exports.create = (req, res) => {
  const { nome, matricula } = req.body;
  alunos.push({ nome, matricula });
  res.redirect('/alunos');
};