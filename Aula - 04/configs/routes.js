const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended:true }));

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
router.get("/perguntas", question.getAllQuestions);
router.post("/perguntar", question.createQuestion);

module.exports = router;