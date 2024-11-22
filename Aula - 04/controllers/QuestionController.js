function index(req, res) {

    let pageContent = {
        page: "pages/perguntar.ejs",
        title: "Projeto Q&A - Perguntas"
    }

    return res.render("default.ejs", pageContent);
}

function createQuestion(req, res) {

    let body = res.body;
    console.log(body);

    return res.redirect("/perguntar");
}

module.exports = {
    index,
    createQuestion
};