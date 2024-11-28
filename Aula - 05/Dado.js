class Dado
{
    constructor(faces){
        this.faces = faces;
    }

    Rolar(){
        return Math.floor(Math.random() * this.faces) + 1;
    }
}

module.exports = Dado;