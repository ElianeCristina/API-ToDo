// fazer a importação do bd

// const bd = require('../infra/bd');
const Usuario = require('../models/usuario-model')

module.exports = (app, bd) => {
    app.get ('/usuario', (req, res) => {// get verbo para inserir
        res.json({"banco de dados":bd.usuario})
    })
    //Parametros e Rotas
    app.get ('/usuario/:email', function(req, res){//fazer uma busca por parametros
        const email = req.params.email
        console.log(email);for(let i = 0; i <= bd.usuario.length; i++){
            if(bd.usuario[i].id == email){
                res.send(bd.usuario[i]);
            }else{
                res.send("erro")
            }
        }
    })

    /*criando a rota e passando o parâmetro email
app.get(‘/aluno/:email’, function(req, res)
//Percorre o array para encontrar o parâmetro
app.get(‘/aluno/:email’, function(req, res){
const email = req.params.email    //aqui mostra qual a requisição do parametro
//cria a variavel i e informa q essa variável tem que ser menor q o tamanho do banco e passa uma vez a mais
for(let i = 0; i <= bd.usuario.length; i++){ //percorre o array do banco
//coloca a condição para a comparação
if(bd.usuario[i].email == email){ // compara o parametro
res.send (bd.usuario[i].email) //envia a resposta q encontrou na comparação
}}})


    */

    app.post ('/usuario', (req, res) =>{ // metodo, rota e o callback de ativação
       // console.log(req.body)// corpo da requisição, os dados de json
      //  res.send('<h1>Dados do usuário</h1>')
        // const body = req.body
        const novoUsuario = new Usuario(req.body.nome, req.body.email, req.body.senha); // passando o modelo para validar
        bd.usuario.push(novoUsuario);
        res.json({"novo usuario":novoUsuario})
})

};
