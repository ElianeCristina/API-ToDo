
var id = 0;

class Tarefa{

    constructor(pendente, fazendo, concluído){
        this.id = id++;
        this.pendente =pendente;
        this.fazendo =fazendo;
        this.concluído =concluído;
    }
}

module.exports = Tarefa