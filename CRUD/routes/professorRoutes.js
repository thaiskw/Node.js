import express from "express";
import * as professorController from "../controllers/professorController.js";

const router = express.Router();

router.get("/", professorController.listar);
router.get("/create", professorController.formCreate);
router.post("/create", professorController.create);

// Editar
router.get("/editar/:id", professorController.formEditar);
router.post("/editar/:id", professorController.editar);

// Excluir
router.post("/deletar/:id", professorController.deletar);

export default router;
