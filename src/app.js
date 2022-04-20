//Quando for subir pro github tem q dar um git ignore na pasta node-modules

const express = require('express') // importação expres
const app = express() // instanciou express dentro de app
const port = 7000 // escolhendo a porta

const tarefaController = require(`./controllers/tarefa-controller`);
const usuarioController = require(`./controllers/usuario-controller`);

const Usuario = require('./models/usuario-model');
const Tarefa = require('./models/tarefa-model');
const bd = require('./infra/bd'); //importar o banco para o arquivo do servidor

// resposta
tarefaController(app, bd);
usuarioController(app, bd);

const novoUsuario = new Usuario("Eliane", "eliane@eliane.com", "12345");
console.log(novoUsuario);

const novaTarefa = new Tarefa("arrumar cozinha", "arrumar sala", "arrumar o quarto");
console.log(novaTarefa);

//body-parser - vai fazer a checagem da rota se a porta vai passar, ajuda a passar a req
app.use(express.json())
// o middle sempre coloca antes da abertura da porta 


// antes de abrir o localhost, tem q dar um node app.js
app.listen (port, () =>{ // chamando a porta que vai ser usada
    console.log(`Exemple server listening on port ${port}`)
})



