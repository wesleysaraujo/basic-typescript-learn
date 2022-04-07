interface AnimalInterface {  
    get species(): string;
    get sound(): string;
}

interface QuadrupedInterface {
    get quantityPaws(): number
}

type AnimalType = AnimalInterface & QuadrupedInterface;

class AnimalMamal implements AnimalInterface, QuadrupedInterface
{
    private _species:string

    private _sound: string

    constructor(species: string, sound: string) {
        this._species = species
        this._sound = sound
    }
    
    get species(): string {
        return this._species
    }

    get sound(): string {
        return this._sound
    }

    get quantityPaws(): number {
        return 4
    }
}

const cat: AnimalMamal = new AnimalMamal('cat', 'miau')

console.log(`The animal is ${cat.species}`)
console.log(`The ${cat.species} sound is ${cat.sound}`)
console.log(`The ${cat.species} has ${cat.quantityPaws} paws`)