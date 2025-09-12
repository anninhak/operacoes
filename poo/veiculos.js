// Classes base para veiculos
class Veiculo {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false; // estado inicial
    }
    // metodo para ligar o veiculo 
ligar(){
    this.ligado = true; 
    console.log(`O carro ${this.marca}${this.modelo} esta ligado.`)
}

//Metodo para desligar o veiculo 
desligar(){
    this.ligado = false;
    console.log(`O carro ${this.marca}${this.modelo} esta des00ligado.`)
    }

//Metodo para obter informaçoes 
getInfo(){
    return (`${this.marca} - ${this.modelo} - ${this.ano}`);
}

}

//Classe filha com constructor personalizado
class Carro extends Veiculo {
    contructor(marca, modelo, ano, portas) {
        super(marca,modelo, ano);
        this.portas = portas;
        this.velocidade = 0;
    }
        //Meto especifico de carro
        acelerar(incremento) {
            if(this.ligado)  {
                this.velocidade += incremento;
                console.log(`${this.getInfo()} acelerou para ${this.velocidade}kem/h`);
            } else {
                console.log("Precisa ligar o carro primeiro!")
            }
        }

        getInfo() {
            return `${super.getInfo()} - ${this.portas} portas`;
        }


}

const carro1 = new Carro("Toyota", "Corolla", 2023, 4)
console.log(carro1.getInfo());
carro1.acelerar(40);
carro1.ligar();
carro1.desligar();