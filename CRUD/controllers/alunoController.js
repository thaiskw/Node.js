import { db } from "../config/firebase.js";
import { ref, push, set, onValue, get, update, remove } from "firebase/database";

// Listar
export const listar = (req, res) => {
  const alunosRef = ref(db, "alunos");
  onValue(
    alunosRef,
    (snapshot) => {
      const data = snapshot.val();
      const alunos = data
        ? Object.keys(data).map((id) => ({ id, ...data[id] }))
        : [];
      res.render("alunos/list", { alunos });
    },
    { onlyOnce: true }
  );
};

// Formulário de criação
export const formCreate = (req, res) => {
  res.render("alunos/create", { aluno: null });
};

// Criar
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

// Formulário de edição
export const formEditar = async (req, res) => {
  const id = req.params.id;
  const alunoRef = ref(db, `alunos/${id}`);
  const snapshot = await get(alunoRef);

  if (snapshot.exists()) {
    const aluno = snapshot.val();
    res.render("alunos/edit", { aluno: { id, ...aluno } });
  } else {
    res.status(404).send("Aluno não encontrado");
  }
};

// Editar
export const editar = async (req, res) => {
  const id = req.params.id;
  const { nome, matricula } = req.body;

  try {
    const alunoRef = ref(db, `alunos/${id}`);
    await update(alunoRef, { nome, matricula });
    res.redirect("/alunos");
  } catch (err) {
    console.error("Erro ao editar aluno:", err);
    res.status(500).send("Erro ao atualizar no Firebase");
  }
};

// Excluir
export const deletar = async (req, res) => {
  const id = req.params.id;

  try {
    const alunoRef = ref(db, `alunos/${id}`);
    await remove(alunoRef);
    res.redirect("/alunos");
  } catch (err) {
    console.error("Erro ao deletar aluno:", err);
    res.status(500).send("Erro ao excluir no Firebase");
  }
};
