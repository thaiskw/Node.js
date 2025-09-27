const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("base", {
        title: "PW",
        view: "pw",
    });
});

module.exports = router;