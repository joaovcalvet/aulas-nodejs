import fs from "fs/promises";

export async function reader(path = "") {

    if(path == "")
        return Promise.reject("Nenhum documento selecionado");

    return fs.readFile(path, {encoding: 'utf-8'});
}

export async function writer(path = "", content = "") {

    if(path == "")
        return Promise.reject("Nenhum documento selecionado");

    return fs.writeFile(path, content);
}

export default { reader, writer };