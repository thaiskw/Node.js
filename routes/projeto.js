const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("base", {
        title: "projeto",
        view: "projeto",
    });
});

module.exports = router;