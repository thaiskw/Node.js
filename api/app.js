const express = require("express");
const path = require("path");

const app = express();

// --- Arquivos estáticos ---
app.use(express.static(path.join(__dirname, "../public"))); // garante que public seja encontrado

// --- Views (EJS) ---
app.set("views", path.join(__dirname, "../views")); // garante que views seja encontrado
app.set("view engine", "ejs");

// --- Rotas ---
const indexRouter = require(path.join(__dirname, "../routes/index"));
app.use("/", indexRouter);

const usuarioRouter = require(path.join(__dirname, "../routes/usuario"));
app.use("/usuario", usuarioRouter);

const integrantesRouter = require(path.join(__dirname, "../routes/integrantes"));
app.use("/integrantes", integrantesRouter);

const sistemasEnbarcadosRouter = require(path.join(__dirname, "../routes/sistemasEnbarcados"));
app.use("/sistemasEnbarcados", sistemasEnbarcadosRouter);

const pwRouter = require(path.join(__dirname, "../routes/pw"));
app.use("/pw", pwRouter);

const vestibulinhoRouter = require(path.join(__dirname, "../routes/vestibulinho"));
app.use("/vestibulinho", vestibulinhoRouter);

const projetoRouter = require(path.join(__dirname, "../routes/projeto"));
app.use("/projeto", projetoRouter);

// --- Porta dinâmica para Render ---
const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}

module.exports = app;
