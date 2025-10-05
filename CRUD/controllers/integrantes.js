const integrantes = [
  { nome: "Thainá", foto: "/images/eu.enc" },
];

export const listar = (req, res) => {
  res.render("integrantes", { title: "Integrantes", integrantes });
};