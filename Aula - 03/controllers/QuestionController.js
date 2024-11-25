const Question = require('../database/models/Question.js');
const Answer = require('../database/models/Answer.js');

module.exports = {
    index: function(req, res) {

        let pageContent = {
            page: "pages/question/perguntar.ejs",
            title: "Projeto Q&A - Perguntar"
        }

        return res.render("default.ejs", pageContent);
    },

    getQuestion: function(req, res) {

        let qID = req.params.id;
        Question.findOne({
            where: {id: qID}
        }).then((question) => {

            if(question === null)
                return res.redirect("/perguntas");

            Answer.findAll({
              raw: true,
              where: {question_id: qID},
              order: [["createdAt", "DESC"]]
            }).then((answers) => {

                let pageContent = {
                    page: "pages/question/pergunta.ejs",
                    title: "Projeto Q&A - Pergunta",
                    question: question,
                    answers: answers
                }
    
                return res.render("default.ejs", pageContent);
            });
        });
    },

    getAllQuestions: function(req, res) {

        let pageContent = {
            page: "pages/question/perguntas.ejs",
            title: "Projeto Q&A - Perguntas"
        }

        Question.findAll({
                raw:true, 
                order: [['createdAt', 'DESC']]
            }).then((questions) => {
                pageContent.questions = questions;
                return res.render("default.ejs", pageContent);
        });
    },

    createQuestion: function(req, res) {

        let body = req.body;

        if(Object.keys(body).length <= 0)
            return res.redirect("/perguntar");

        for (const key in body)
        {
            if(body[key] === '')
            {
                console.log(`O campo ${key} está vazio.`);
                return res.redirect("/perguntar");
            }
        }

        Question.create({
            title: body.title,
            description: body.descr
        });

        return res.redirect("/perguntar");
    },

    createAnswer: function(req, res) {

        let questBody = req.body;

        Answer.create({
            question_id: questBody.question_id,
            body: questBody.answer
        }).then((answer) => {

            if(answer === null)
                return res.redirect("/");

            return res.redirect(`/pergunta/${questBody.question_id}`);
        });

    }
}