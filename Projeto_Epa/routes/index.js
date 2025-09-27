const express = require("express");
const router = express.Router();

//home
router.get("/", async (req, res)=> {
    res.render("base", {
        title: "Home",
        view: "index",
    });
});

module.exports = router;