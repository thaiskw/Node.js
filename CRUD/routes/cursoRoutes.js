import express from "express";
import * as cursoController from "../controllers/cursoController.js";
const router = express.Router();

router.get("/", cursoController.listar);
router.get("/create", cursoController.formCreate);
router.post("/create", cursoController.create);

export default router;