// fazer a importação do bd
// const bd = require('../infra/bd');
const Tarefa = require('../models/tarefa-model')

// req para requisição
// res para dar resposta

module.exports = (app, bd) => {
app.get ('/tarefa', (req, res) =>{ // get verbo para mostrar
    res.send('Dados de tarefa')
})
app.post ('/tarefa', (req, res) =>{ //post verbo para inserir
    console.log(req.body)
    res.send("<h1>Tarefas</h1>")
})
};
