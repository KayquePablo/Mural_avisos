document.addEventListener('DOMContentLoaded', () => { //Assim que a pagina carregar
    updatePost();
})

function updatePost() { //Aqui vou fazer a chamada para o Back e pegar todos os dados
    fetch('http://localhost:3000/api/all').then(res => {
        return res.json()
    }).then(json => {
        console.log(json); //string

        let postElements = '';

        let posts = JSON.parse(json);
        console.log(posts); //objeto
        posts.forEach((post) => {
            let postElement = `<div id="${post.id}" class="card mb-4">
                <div class="card-header">
                    <h5 class="card-title">${post.title}</h5>
                </div>
                <div class="card-body">
                    <div class="card-text">${post.description}</div>
                </div>
            </div>`

            postElements += postElement;
        })

        document.getElementById("posts").innerHTML = postElements;
    })
}

function newPost() {
    let title = document.getElementById("titulo").value; //pegando o valor do meu title no html
    let description = document.getElementById("desc").value; //pegando valor da descrição no html

    let post = {title, description}; //Criando meu objeto

    const options = { 
        method: "post", 
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(post) //Transformando meu "post" que e um objeto em uma string

    }

    fetch('http://localhost:3000/api/new', options).then(res => {
        console.log(res);
        updatePost(); //atualizar a tela apos adicionar o novo post
        document.getElementById("titulo").value = ""; // apos a postagem limpar os campos
        document.getElementById("desc").value = "";
    })
}
