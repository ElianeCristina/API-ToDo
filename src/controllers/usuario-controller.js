// fazer a importação do bd

// const bd = require('../infra/bd');
const Usuario = require('../models/usuario-model')

module.exports = (app, bd) => {
    app.get ('/usuario', (req, res) => {// get verbo para inserir
        res.json({"banco de dados":bd.usuario})
    })
    //Parametros e Rotas
    app.get ('/usuario/:nome', function(req, res){//fazer uma busca por parametros
        const nome = req.params.nome
        
        /*passa o parametro da validação da requisição para mostrar na busca no insommnia
        for(let i = 0; i<= bd.length; i++) {
            res.json({""Usuario encontrado": nome})
        }*/
    })

    app.post ('/usuario', (req, res) =>{ // metodo, rota e o callback de ativação
       // console.log(req.body)// corpo da requisição, os dados de json
      //  res.send('<h1>Dados do usuário</h1>')
        // const body = req.body
        const novoUsuario = new Usuario(req.body.nome, req.body.email, req.body.senha); // passando o modelo para validar
        bd.usuario.push(novoUsuario);
        res.json({"novo usuario":novoUsuario})
})

};
