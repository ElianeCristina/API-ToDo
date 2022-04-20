var id = 0;// não é passado dentro do constructor, para que o usuário não passae, e nem dentro da classe para que autoincremente, 

class Usuario{ // criando o banco de dados relacionando js e banco
    constructor(nome, email, senha){
        this.id = id++; // chama o id aqui
        this.nome = nome;
        this.email = email;
        this.senha = this.validarSenha(senha);
    }
    //criar as regras de validação aqui, não pode cadastrar no banco de dados antes de fazer essa validação, por isso os models
    validarSenha(senha) {
    if(senha.length <= 5){
        return senha;
    }else{
        throw new Error ("Senha deve ter 5 caracteres")
    }
    }
    }

// para utilizar essa classe temos que exportar ela
module.exports = Usuario