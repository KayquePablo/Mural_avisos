const express = require('express');
const cors = require('cors');
const post = require('../model/post');
const router = express.Router()

const corsOptions = { // bloqueando para poder fazer a requisição somente sites do meu dominio.
    origin: 'http://localhost:3000' 
}

router.use(cors(corsOptions));

router.get('/all', (req, res) => { // Rota buscar todos os dados 
    res.json(JSON.stringify(post.getAll())) //Usando JSON.stringify para mandar meu objeto como STRING
});

router.post('/new', express.json(), (req, res) => { //Rota para adicoinar novo aviso \\//Passando o middleware(express.json), para poder ter acesso ao "title"
    let title = req.body.title;
    let description = req.body.description;

    post.newPost(title, description);

    res.send('Post Adicionado!');
});

module.exports = router;