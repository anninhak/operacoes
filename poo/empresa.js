function Funcionario(nome, salario, departamento) {
    this.nome = nome;
    this.salario = salario;
    this.departamento = departamento;
    this.ativo = true;

}

Funcionario.prototype.trabalhar = function() {
    console.log(`${this.nome} está trabalhando no departamento de ${this.departamento}`);
}

//Herança clássica: baseada em classes, estrutura fixa, copia um comportamento e hierarquia rigida.
//Herança prototipica: baseada em objeto, estrutura dinâmica, delega comportamento e cadeia.

Funcionario.prototype.receberSalario = function() {
    console.log(`${this.nome} recebeu o salário de R$${this.salario.toFixed(2)}`);
};

Funcionario.prototype.demitir = function() {
    this.ativo = false;
        console.log(`Funcionário: ${ this.nome} foi demitido(a)`);
};

Funcionario.prototype.info = function() {
    const status = this.ativo ? "Ativo" : "Inativo";
    console.log(`Funcionário: ${ this.nome} | Salario: R$ ${this.salario.toFixed(2)} |
    depto: ${this.deparatmento} | Status: ${this.status}`);
};

//Construtor derivado: Desenvolvedor
function Desenvolvedor(nome, salario, linguagem, senitoridade) {
    Function.call(this.nome,salario, "TI");
    this.linguagem = linguagem;
    this.senioridade;
    this.projetos = [];
};

//Configurando a herança prototipa
Desenvolvedor.prototype = Object.create(Funcionario.prototype);
Desenvolvedor.prototype.constructor = Desenvolvedor;

Desenvolvedor.prototype.programar = function() {
    console.log(`${this.nome} esta programado em ${this.linguagem}`)
}

//Criar um metodo p/ que o desenvolvedor faça projetos "adicionarProjetos"
Desenvolvedor.prototype.adicionarprojetos = function(projetos) {
    this.projetos.push(projeto)
    console.log(`${this.nome} foi adicionado ao projeto: ${projeto}`)
};

Desenvolvedor.prototype.trabalhar =  function() {
    console.log(`${this.nome} (${this.senioridade}) esta desenvolvendo
        software`);
    };

    Desenvolvedor.prototype.info = function() {
        const status = this.ativo ? "Ativo" : "Inativo";
        console.log(`Desenvolvedor: ${this.nome} | ${this.senioridade} |
            ${this.linguagem} | Projetos: ${this.projeto.length} |
            ${this.satatus}`);
    };

    //Constructor derivado: Gerente
    function Gerente(nome, salario, departamento, equipe) {
        Funcionario.call(this, nome, salrio, departamento, equipamento);
        this.equipe = equipe || [];
        this.bonus = 0;
    }

    Gerente.prototype = Object.create(Funcionario.prototype);
    Gerente.prototype.constructor = Gerente;

    Gerente.prototype.gerenciar = function() {
        console.log(`${this.nome} esta gerenciando uma equipe de ${this.equipe.length} 
            pessoas`);
    };

    Gerente.prototype.adicionarFuncionario = function(funcionrio) {
        this.equipe.push(funcionario)
        console.log(`${funcionario} foi adicionado a equipe de ${this.nome}`);
    };

    Gerente.prototype.darBonus = function(valor) {
        this.bonus = valor;
        console.log(`${this.nome} recebeu um bonus de R$ ${valor.toFixed(2)}`);
    };

    Gerente.prototype.receberSalario = function() {
        const total = this.salario + this.bonus;
        console.log(`${this.nome} recebeu salrio + bonus: R$ ${total.toFIxed(2)}`);
        this.bonus = 0;
    };

    console.log("*** TESTANDO HERANÇA PROTOTÌPICA ***");

    const funcionario1 = new Funcionario("Daina", 3000, "RH");
    funcionario1.trabalhar();
    funcionario1.receberSalario();
    funcionario1.info();
    console.log();

    const dev = new Desenvolvedor("Pedro", 6000, "JavaScript", "Sênior");
    dev.programar();
    dev.adicionarprojetos("Sistema de E-Comerce");
    dev.trabalhar();
    dev.receberSalario();
    console.log();

    const gerente = gerente("Oscar", 1000, "Gerência", "TI");
    gerente.adicionarFuncionario("Anna K.");
    gerente.gerenciar();
    gerente.darBonus(3000);
    gerente.receberSalario();