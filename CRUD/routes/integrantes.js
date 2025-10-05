app.get("/integrantes", (req, res) => {
  const integrantes = [
    { nome: "Thainá", foto: "/images/eu.enc" }
  ];

  res.render("integrantes", { title: "Integrantes", integrantes });
});