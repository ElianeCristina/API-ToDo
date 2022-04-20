// fazer a importação do bd

const bd = require('../infra/bd');
const usuario = require ('./models/usuario-model')

module.exports = (app) => {
    app.get ('/usuario', (req, res) => {// get verbo para inserir
        res.send('Dados do usuario')
    })
    app.post ('/usuario', (req, res) =>{ // metodo, rota e o callback de ativação
        console.log(req.body)// corpo da requisição
        res.send('<h1>Dados do usuário</h1>')
})

};
