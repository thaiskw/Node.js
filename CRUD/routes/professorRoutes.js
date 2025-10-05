import express from "express";
import * as professorController from "../controllers/professorController.js";

const router = express.Router();

router.get("/", professorController.listar);
router.get("/create", professorController.formCreate);
router.post("/create", professorController.create);

export default router;