interface AnimalInterface {    
    getSpecie(): string;
    getSound(): string;
}

interface QuadrupedeInterface {
    getQuantityPaws(): number
}

class AnimalMamal implements AnimalInterface, QuadrupedeInterface {
    private specie:string

    private sound: string

    constructor(specie: string, sound: string) {
        this.specie = specie
        this.sound = sound
    }
    
    getSpecie(): string {
        return this.specie
    }

    getSound(): string {
        return this.sound
    }

    getQuantityPaws(): number {
        return 4
    }
}

const cat: AnimalMamal = new AnimalMamal('cat', 'miau')

console.log(`The animal is ${cat.getSpecie()}`)
console.log(`The ${cat.getSpecie()} sound is ${cat.getSound()}`)