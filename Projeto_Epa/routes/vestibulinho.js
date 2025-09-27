const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("base", {
        title: "vestibulinho",
        view: "vestibulinho",
    });
});

module.exports = router;