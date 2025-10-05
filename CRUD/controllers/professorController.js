import { db } from "../config/firebase.js";
import { ref, push, set, onValue } from "firebase/database";

// Listar todos os professores
export const listar = (req, res) => {
  const professoresRef = ref(db, "professores");
  onValue(professoresRef, (snapshot) => {
    const data = snapshot.val();
    const professores = data ? Object.values(data) : [];
    res.render("professores/list", { professores });
  }, { onlyOnce: true });
};

// Formulário de criação
export const formCreate = (req, res) => {
  res.render("professores/create");
};

// Criar novo professor
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
