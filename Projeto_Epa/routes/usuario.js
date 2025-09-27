const express = require("express");
const router = express.Router();

//listar usuario
router.get("/", async (req, res)=> {

    res.render("base", {
        title: "Listar Usuários",
        view: "usuario/show",
        items: [] 
    });
});

//form edit usuario
router.get("/edit", async (req, res)=> {
    res.render("base", {
        title: "Editar Usuário",
        view: "usuario/edit",
    });
});

//form add usuario
router.get("/add", async (req, res)=> {
    res.render("base", {
        title: "Adicionar Usuário",
        view: "usuario/add",
    });
});

module.exports = router;