const express = require('express');
const router = express.Router();

//Controllers
const question = require('../controllers/QuestionController.js');

//Routes
router.get("/", function(req, res){

    let pageContent = {
        page: "pages/index.ejs",
        title: "Projeto Q&A - Home"
    }

    return res.render("default.ejs", pageContent);
});

router.get("/perguntar", question.index);
router.post("/salvarpergunta", question.createQuestion);

module.exports = router;