// -------------------- IMPORTAÇÕES --------------------
import path from "path";
import express from "express";
import morgan from "morgan";
import expressLayouts from "express-ejs-layouts";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

// Rotas
import categoriaRoutes from "./routes/categoriaRoutes.js";
import alunoRoutes from "./routes/alunoRoutes.js";
import cursoRoutes from "./routes/cursoRoutes.js";

// -------------------- CONFIGURAÇÕES BÁSICAS --------------------
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// -------------------- EJS + LAYOUTS --------------------
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "index"); // layout base = views/index.ejs

// -------------------- MIDDLEWARES --------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public"))); // arquivos estáticos

// -------------------- ROTAS --------------------
app.use("/categorias", categoriaRoutes);
app.use("/alunos", alunoRoutes);
app.use("/cursos", cursoRoutes);

app.get("/", (req, res) => {
  res.render("home", { title: "Página Inicial" });
});

app.get("/", (req, res) => {
  res.render("home", { title: "Página Inicial" });
});

// 404
app.use((req, res) => {
  res.status(404).render("notfound", { title: "Página não encontrada" });
});


// -------------------- SERVIDOR --------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});