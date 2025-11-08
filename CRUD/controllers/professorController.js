import { db } from "../config/firebase.js";
import { ref, push, set, onValue, get, child, update, remove } from "firebase/database";

// Listar
export const listar = (req, res) => {
  const professoresRef = ref(db, "professores");
  onValue(professoresRef, (snapshot) => {
    const data = snapshot.val();
    // transforma {id1: {...}, id2: {...}} em array [{id, nome, disciplina}, ...]
    const professores = data
      ? Object.keys(data).map((id) => ({ id, ...data[id] }))
      : [];
    res.render("professores/list", { professores });
  }, { onlyOnce: true });
};

// Formulário de criação
export const formCreate = (req, res) => {
  res.render("professores/create", { professor: null });
};

// Criar
export const create = async (req, res) => {
  try {
    const { nome, disciplina } = req.body;
    const professoresRef = ref(db, "professores");
    const novoProfessorRef = push(professoresRef);
    await set(novoProfessorRef, { nome, disciplina });
    res.redirect("/professores");
  } catch (err) {
    console.error("Erro ao adicionar professor:", err);
    res.status(500).send("Erro ao salvar no Firebase");
  }
};

// Formulário de edição
export const formEditar = async (req, res) => {
  const id = req.params.id;
  const professorRef = ref(db, `professores/${id}`);
  const snapshot = await get(professorRef);

  if (snapshot.exists()) {
    const professor = snapshot.val();
    res.render("professores/edit", { professor: { id, ...professor } }); // muda aqui 👈
  } else {
    res.status(404).send("Professor não encontrado");
  }
};


// Editar
export const editar = async (req, res) => {
  const id = req.params.id;
  const { nome, disciplina } = req.body;

  try {
    const professorRef = ref(db, `professores/${id}`);
    await update(professorRef, { nome, disciplina });
    res.redirect("/professores");
  } catch (err) {
    console.error("Erro ao editar professor:", err);
    res.status(500).send("Erro ao atualizar no Firebase");
  }
};

// Excluir
export const deletar = async (req, res) => {
  const id = req.params.id;

  try {
    const professorRef = ref(db, `professores/${id}`);
    await remove(professorRef);
    res.redirect("/professores");
  } catch (err) {
    console.error("Erro ao deletar professor:", err);
    res.status(500).send("Erro ao excluir no Firebase");
  }
};
