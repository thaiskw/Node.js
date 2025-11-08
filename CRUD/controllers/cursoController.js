import { db } from "../config/firebase.js";
import { ref, push, set, onValue, remove as removeDB, update as updateDB } from "firebase/database";

// Listar cursos
export const listar = (req, res) => {
  const cursosRef = ref(db, "cursos");
  onValue(cursosRef, (snapshot) => {
    const data = snapshot.val();
    const cursos = data
      ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
      : [];
    res.render("cursos/list", { cursos });
  }, { onlyOnce: true });
};

// Formulário de criação
export const formCreate = (req, res) => {
  res.render("cursos/create");
};

// Criar novo curso
export const create = async (req, res) => {
  try {
    const { nome, cargaHoraria } = req.body;
    const cursosRef = ref(db, "cursos");
    const novoCursoRef = push(cursosRef);
    await set(novoCursoRef, { nome, cargaHoraria });
    res.redirect("/cursos");
  } catch (err) {
    console.error("Erro ao adicionar curso:", err);
    res.status(500).send("Erro ao salvar no Firebase");
  }
};

// Formulário de edição
export const formEdit = (req, res) => {
  const { id } = req.params;
  const cursoRef = ref(db, `cursos/${id}`);
  onValue(cursoRef, (snapshot) => {
    const curso = snapshot.val();
    res.render("cursos/edit", { id, curso });
  }, { onlyOnce: true });
};

// Atualizar curso
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, cargaHoraria } = req.body;
    const cursoRef = ref(db, `cursos/${id}`);
    await updateDB(cursoRef, { nome, cargaHoraria });
    res.redirect("/cursos");
  } catch (err) {
    console.error("Erro ao atualizar curso:", err);
    res.status(500).send("Erro ao atualizar no Firebase");
  }
};

// Excluir curso
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const cursoRef = ref(db, `cursos/${id}`);
    await removeDB(cursoRef);
    res.redirect("/cursos");
  } catch (err) {
    console.error("Erro ao excluir curso:", err);
    res.status(500).send("Erro ao excluir do Firebase");
  }
};
