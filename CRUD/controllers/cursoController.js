import { db } from "../config/firebase.js";
import { ref, push, set, onValue } from "firebase/database";

// Listar cursos
export const listar = (req, res) => {
  const cursosRef = ref(db, "cursos");
  onValue(cursosRef, (snapshot) => {
    const data = snapshot.val();
    const cursos = data ? Object.values(data) : [];
    res.render("cursos/list", { cursos });
  }, { onlyOnce: true });
};

// Formulário
export const formCreate = (req, res) => {
  res.render("cursos/create");
};

// Adicionar novo curso
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
}