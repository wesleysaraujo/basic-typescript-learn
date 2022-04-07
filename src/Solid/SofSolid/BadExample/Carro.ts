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

    public buzinar(): void{
        console.log('Beeeeeee')
    }

    public trocarPneu(): void{
        console.log('Trocando pneu')
    }

    public trocarOleo(): void{
        console.log('Evaziando oleo velho')
        console.log('Trocando o filtro de óleo')
        console.log('Colocando oleo novo')
        console.log('Óleo trocado')
    }

    public abastacer(litros: number): void{
        console.log(`Abastecendo com ${litros} litros`)
    }

    public lavar(): void{
        console.log('Lavando o carro')
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

// Uso da classe Carro
let carro: Carro = new Carro(2016, 'New Fiesta', 'Ford', 'Branco')
console.log('Comprei o seguinte carro:')
console.log(`Modelo: ${carro.modelo} - Marca: ${carro.marca} - Cor: ${carro.cor} - Ano: ${carro.ano}`)
console.log(`Velocidade: ${carro.velocidade}`)
console.log('Acelerando...')
carro.acelerar()
console.log(`Velocidade: ${carro.velocidade}`)
console.log('Acelerando +...')
carro.acelerar()
carro.acelerar()
console.log(`Velocidade: ${carro.velocidade}`)
console.log('Freando...')
carro.frear()
console.log(`Velocidade: ${carro.velocidade}`)
console.log('Trocando oleo...')
carro.trocarOleo()
carro.trocarPneu()