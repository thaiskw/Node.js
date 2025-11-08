const integrantes = [
  { nome: "Thainá", foto: "/images/eu.enc" },
  { nome: "Júlia", foto: "/images/julia.jpg" },
  { nome: "Nicole", foto: "/images/nicole.jpg" },
];

export const listar = (req, res) => {
  res.render("integrantes", { title: "Integrantes", integrantes });
};