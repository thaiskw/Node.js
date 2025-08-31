const express = require("express");
const path = require("path");

const app = express();

// Pastas públicas (CSS, JS, imagens, etc)
app.use(express.static(path.join(__dirname, "../public")));

// Configuração do EJS como view engine
app.set("views", path.join(__dirname, "../views")); // Ajuste aqui
app.set("view engine", "ejs");

// Rotas principais
const indexRouter = require("../routes/index");
app.use("/", indexRouter);

const usuarioRouter = require("../routes/usuario");
app.use("/usuario", usuarioRouter);

const integrantesRouter = require("../routes/integrantes");
app.use("/integrantes", integrantesRouter);

const sistemasEnbarcadosRouter = require("../routes/sistemasEnbarcados");
app.use("/sistemasEnbarcados", sistemasEnbarcadosRouter);

const pwRouter = require("../routes/pw");
app.use("/pw", pwRouter);

const vestibulinhoRouter = require("../routes/vestibulinho");
app.use("/vestibulinho", vestibulinhoRouter);

const projetoRouter = require("../routes/projeto");
app.use("/projeto", projetoRouter);

// Inicializa o servidor só se rodar diretamente
if (require.main === module) {
  app.listen(3000, () => {
    console.log("Servidor em execução na porta 3000");
  });
}

module.exports = app;
