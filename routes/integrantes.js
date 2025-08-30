const express = require("express");
const router = express.Router();

// Página integrantes
router.get("/", async (req, res) => {
    res.render("base", {
        title: "Integrantes",
        view: "integrantes",
    });
});

module.exports = router;