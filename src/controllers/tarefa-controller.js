// fazer a importação do bd

const bd = require('../infra/bd');
const usuario = require ('./models/tarefa-model')

module.exports = (app) => {
app.get ('/tarefa', (req, res) =>{ // get verbo para inserir
    res.send('Dados de tarefa')
})
app.post ('/tarefa', (req, res) =>{
    console.log(req.body)
    res.send("<h1>Tarefas</h1>")
})
};
