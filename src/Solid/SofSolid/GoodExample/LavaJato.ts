import Carro from './Carro'

interface ServicosLavaJatoInterface {
    get carro(): Carro
    lavar(): string
    polir(): string
}

export default class LavaJato implements ServicosLavaJatoInterface {
    private _carro: Carro

    constructor(carro: Carro)
    {
        this._carro = carro
    }

    get carro(): Carro {
        return this._carro
    }

    public lavar(): string {
        return `Lavando o ${this.carro.getDetalheCarro()}`
    }
    
    public polir(): string {
        return `Polindo o ${this.carro.getDetalheCarro()}`
    }
}