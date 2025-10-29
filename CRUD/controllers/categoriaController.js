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
    try {
      // Lê todos os registros em "categorias"
      const snapshot = await get(rootRef);

      // Se houver dados, armazena o valor; senão, objeto vazio
      const categorias = snapshot.exists() ? snapshot.val() : {};

      // Renderiza a view passando os dados e o título
      res.render("categorias/list", {
        title: "Lista de Categorias",
        categorias, // <-- passa para o EJS
      });
    } catch (error) {
      console.error("Erro ao listar categorias:", error);
      res.status(500).send("Erro ao carregar categorias");
    }
  },

  // [CREATE - FORM] Mostra o formulário de criação (sem acessar o DB)
  createForm(req, res) {
    // Apenas renderiza a página de criação
    res.render("categorias/create", { title: "Nova Categoria" });
  },

  // [CREATE - ACTION] Cria uma categoria nova
  async create(req, res) {
    try {
      // Extrai o campo "nome" e "descricao" enviados via POST
      const { nome, descricao } = req.body;

      // Gera uma nova chave única sob "categorias" (como um auto-id)
      const novo = push(rootRef);

      // Grava o objeto no caminho gerado (ex.: categorias/-Nabc123: { nome, descricao })
      await set(novo, { nome, descricao });

      // Redireciona para a listagem após sucesso
      res.redirect("/categorias");
    } catch (e) {
      console.error("Erro create categoria:", e);
      res.status(500).send("Erro ao criar categoria");
    }
  },

  // [UPDATE - FORM] Carrega dados para edição de uma categoria específica
  async editForm(req, res) {
    try {
      // Captura o id da rota (ex.: /categorias/:id/edit)
      const { id } = req.params;

      // Monta ref para o filho: categorias/{id}
      const snap = await get(child(rootRef, id));

      // Se não existir, retorna 404
      if (!snap.exists())
        return res.status(404).send("Categoria não encontrada");

      // Renderiza o form de edição com os dados atuais
      res.render("categorias/edit", {
        title: "Editar Categoria",
        id,
        categoria: snap.val(),
      });
    } catch (e) {
      console.error("Erro editForm categoria:", e);
      res.status(500).send("Erro ao abrir edição");
    }
  },

  // [UPDATE - ACTION] Salva a edição de uma categoria
  async update(req, res) {
    try {
      // Pega o id da URL e o novo nome/descrição do body
      const { id } = req.params;
      const { nome, descricao } = req.body;

      // Atualiza apenas os campos enviados no caminho categorias/{id}
      await update(child(rootRef, id), { nome, descricao });

      // Volta para a listagem
      res.redirect("/categorias");
    } catch (e) {
      console.error("Erro update categoria:", e);
      res.status(500).send("Erro ao atualizar categoria");
    }
  },

  // [DELETE] Remove uma categoria pelo id
  async delete(req, res) {
    try {
      // Lê o id da rota
      const { id } = req.params;

      // Remove o nó categorias/{id}
      await remove(child(rootRef, id));

      // Redireciona para a listagem após excluir
      res.redirect("/categorias");
    } catch (e) {
      console.error("Erro delete categoria:", e);
      res.status(500).send("Erro ao excluir categoria");
    }
  },
};
