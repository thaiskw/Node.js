// Importa a instância do Realtime Database já inicializada (config/firebase.js)
import { db } from "../config/firebase.js";

// Importa funções do Web SDK do Realtime Database usadas no CRUD
import { ref, get, push, set, child, update, remove } from "firebase/database";

// Cria uma referência "raiz" para o nó/coleção "categorias" no banco
const rootRef = ref(db, "categorias");

// Exporta o controller como módulo ES (usado nas rotas)
export default {
  // [READ] Lista todas as categorias
  async list(req, res) {
    res.render("categorias/list", {
      title: "Lista de Categorias",
    });
  },

  // [CREATE - FORM] Mostra o formulário de criação (sem acessar o DB)
  createForm(req, res) {
    // Apenas renderiza a página de criação
    res.render("categorias/create", { title: "Nova Categoria" });
  },

  // [CREATE - ACTION] Cria uma categoria nova
  async create(req, res) {
    try {
      // Extrai o campo "nome" enviado via POST (body-parser já configurado)
      const { nome, descricao } = req.body;
      // Gera uma nova chave única sob "categorias" (como um auto-id)
      const novo = push(rootRef);
      // Grava o objeto no caminho gerado (ex.: categorias/-Nabc123: { nome })
      await set(novo, { nome, descricao });
      // Redireciona para a listagem após sucesso
      res.redirect("/categorias");
    } catch (e) {
      console.error("Erro create categoria:", e);
      res.status(500).send("Erro ao criar categoria");
    }
  },

  // [UPDATE - FORM] Carrega dados para edição de uma categoria específica

  // [UPDATE - ACTION] Salva a edição de uma categoria

  // [DELETE] Remove uma categoria pelo id
};