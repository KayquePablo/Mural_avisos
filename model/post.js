module.exports = {

    post: [ //Objeto com a propriedade post
        {
            id: "aleatorio",
            title: "Teste Mural",
            description: "Descrição do Teste"
        }
    ],

    getAll() { //Metodo
        return this.post //"this" se refere a ele mesmo, pois sem ele ira procurar uam variavel post sendo que nao exite, existe o objeto.
    },

    newPost(title, description) { //Metodo
        this.post.push({ id: generateID(), title, description }) //Inserindo novo elemento \\// Estava dando erro devido a falta do "this" para se referir a ele mesmo(objeto).
    }
}

function generateID() {
    return Math.random().toString(36).substring(2, 9) //Gerando ID aleatório. E que seja uma string(toString) e com a base 36 que pega todas a letras e numero do alfabeto. E com a "substring" eu pego do elemento 2 em diante tirando o numero e ponto que vem antes e limitei a 9 numeros.
}