import ejs from "ejs";

export default class HtmlParser
{
    static async Parser(data = null)
    {
        if(data == null)
            return Promise.reject("Nenhuma informação enviada ao parser");

        return await ejs.renderFile(
            "./Classes/HtmlParser/tableTemplate.ejs", 
            {header: data.header, body: data.body}
        );
    }
}