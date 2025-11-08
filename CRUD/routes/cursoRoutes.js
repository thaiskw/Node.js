import express from "express";
import * as cursoController from "../controllers/cursoController.js";

const router = express.Router();

router.get("/", cursoController.listar);
router.get("/create", cursoController.formCreate);
router.post("/create", cursoController.create);
router.get("/edit/:id", cursoController.formEdit);
router.post("/edit/:id", cursoController.update);
router.post("/delete/:id", cursoController.remove);

export default router;
