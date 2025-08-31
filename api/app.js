const express = require("express");
const path = require("path");

const app = express();

// Caminhos absolutos para Vercel
const publicPath = path.join(process.cwd(), "public");
app.use(express.static(publicPath));

const viewsPath = path.join(process.cwd(), "views");
app.set("views", viewsPath);
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

// Porta dinâmica para Vercel
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor em execução na porta ${PORT}`);
  });
}

module.exports = app;
