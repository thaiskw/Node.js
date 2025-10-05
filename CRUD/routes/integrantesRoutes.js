import express from "express";
import { listar } from "../controllers/integrantes.js";

const router = express.Router();

router.get("/", listar);

export default router;