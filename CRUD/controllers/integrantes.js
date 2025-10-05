const integrantes = [
  { nome: "Thainá", foto: "/images/eu.enc" },
  { nome: "Nicole", foto: "/images/nicole.enc" },
  { nome: "Júlia", foto: "/images/julia.enc" }
];

export const listar = (req, res) => {
  res.render("integrantes", { title: "Integrantes", integrantes });
};