import Carro from './Carro'

interface ServicosMecanicosInterface {
    get carro(): Carro
    trocarPneu(): string
    trocarOleo(): string
}

export default class Mecanico implements ServicosMecanicosInterface {
    private _carro: Carro

    constructor(carro: Carro)
    {
        this._carro = carro
    }

    get carro(): Carro {
        return this._carro
    }

    public trocarPneu(): string {
        return `Trocando pneu do ${this.carro.getDetalheCarro()}`
    }
    
    public trocarOleo(): string {
        return `Trocando oleo do ${this.carro.getDetalheCarro()}`
    }
}