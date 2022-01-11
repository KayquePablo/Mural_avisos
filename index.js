const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const api = require('./routes/api')

app.use('/api', api); 
app.use('/', express.static(path.join(__dirname, 'public'))) //chamando minha pasta public com o arquivo html


app.listen(port, () => { // porta que vai ficar ouvindo e recebendo as requisições
    console.log(`Servidor Rodando na porta: ${port}`);
})


/* -->> Substituição do bodyParser 
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
*/