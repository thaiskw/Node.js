app.get("/integrantes", (req, res) => {
  // Aqui você pode passar os nomes e fotos do grupo
  const integrantes = [
    { nome: "Thainá", foto: "/images/eu.enc" }
  ];

  res.render("integrantes", { title: "Integrantes", integrantes });
});