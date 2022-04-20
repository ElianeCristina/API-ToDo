
var id = 0;

class Tarefa{

    constructor(pendente, fazendo, concluido){
        this.id = id++;
        this.pendente =pendente;
        this.fazendo =fazendo;
        this.concluído =concluido;
    }
}

module.exports = Tarefa