const cursos = [];

exports.listar = (req, res) => {
  res.render('cursos/list', { cursos });
};

exports.formCreate = (req, res) => {
  res.render('cursos/create');
};

exports.create = (req, res) => {
  const { nome, cargaHoraria } = req.body;
  cursos.push({ nome, cargaHoraria });
  res.redirect('/cursos');
};