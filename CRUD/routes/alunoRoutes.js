import express from "express";
import * as alunoController from "../controllers/alunoController.js";

const router = express.Router();

router.get("/", alunoController.listar);
router.get("/create", alunoController.formCreate);
router.post("/create", alunoController.create);
router.get("/edit/:id", alunoController.formEditar);
router.post("/edit/:id", alunoController.editar);
router.post("/delete/:id", alunoController.deletar);

export default router;
