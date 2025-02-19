import fs from "fs/promises";
import pdf from "html-pdf";

export async function reader(path = "")
{
    if(path == "")
        return Promise.reject("Nenhum documento selecionado");

    return fs.readFile(path, "utf-8");
}

export async function writer(path = "", content = "")
{
    if(path == "")
        return Promise.reject("Nenhum documento selecionado");

    return fs.writeFile(path, content);
}

export function WritePDF(path, html)
{
    pdf.create(html, {}).toFile(path, err => err);
}

export function processCsv(data = null)
{
    if(data == null)
        return new Error("Nenhuma informação passada para processamento");

    data = data.split(/\r\n|\r|\n/);
    let content = [];

    for (const key in data)
    {
        if(data[key] == "")
            continue;

        content.push(data[key].split(','));
    }

    return content;
}

export default { reader, writer, processCsv, WritePDF };