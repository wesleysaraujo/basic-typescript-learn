export default class Carro
{
    private _ano: number
    private _velocidade: number = 0
    private _modelo: string
    private _marca: string
    private _cor: string

    constructor(ano: number, modelo: string, marca: string, cor: string){
        this._ano = ano
        this._modelo = modelo
        this._marca = marca
        this._cor = cor
    }

    public acelerar(): void{
        this._velocidade += 10
    }

    public frear(): void{
        if (this._velocidade > 10) {
            this._velocidade -= 10
        } else {
            this._velocidade = 0
        }
    }

    public buzinar(): string{
        return 'Beeeeeee'
    }

    public getDetalheCarro(): string {
        return `${this.marca} ${this.modelo} ${this.cor} ano ${this.ano}`
    }

    get ano(): number{
        return this._ano
    }

    get modelo(): string{
        return this._modelo
    }

    get marca(): string{
        return this._marca
    }

    get velocidade(): number{
        return this._velocidade
    }

    get cor(): string{
        return this._cor
    }

    set cor(cor: string){
        this._cor = cor
    }
}

// Uso da classe Carro - O objeto carro é um carro de cor preta, modelo Gol, marca Fiat e ano 2018
// e esse carro ele acelera, freia e buzina.
// Ao contrário do exemplo ruim, trocar o pneu, trocar o oleo seria uma responsabilidade do objeto Mecanico, abastecer do objeto Motorista, e lavar do LavaJato.
/*
let carro: Carro = new Carro(2016, 'New Fiesta', 'Ford', 'Branco')
console.log('Comprei o seguinte carro:')
console.log(`Modelo: ${carro.modelo} - Marca: ${carro.marca} - Cor: ${carro.cor} - Ano: ${carro.ano}`)
console.log(`Velocidade: ${carro.velocidade}`)
console.log('Acelerando...')
carro.acelerar()
console.log(`Velocidade: ${carro.velocidade}`)
carro.acelerar()
console.log(`Velocidade: ${carro.velocidade}`)
console.log('Freando...')
carro.frear()
console.log(`Velocidade: ${carro.velocidade}`)
carro.frear()
console.log(`Velocidade: ${carro.velocidade}`)
*/