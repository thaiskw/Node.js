import { db } from "../config/firebase.js";
import { ref, push, set, onValue } from "firebase/database";

// Listar alunos
export const listar = (req, res) => {
  const alunosRef = ref(db, "alunos");
  onValue(alunosRef, (snapshot) => {
    const data = snapshot.val();
    const alunos = data ? Object.values(data) : [];
    res.render("alunos/list", { alunos });
  }, { onlyOnce: true });
};

// Formulário
export const formCreate = (req, res) => {
  res.render("alunos/create");
};

// Adicionar novo aluno
export const create = async (req, res) => {
  try {
    const { nome, matricula } = req.body;
    const alunosRef = ref(db, "alunos");
    const novoAlunoRef = push(alunosRef);
    await set(novoAlunoRef, { nome, matricula });
    res.redirect("/alunos");
  } catch (err) {
    console.error("Erro ao adicionar aluno:", err);
    res.status(500).send("Erro ao salvar no Firebase");
  }
};
