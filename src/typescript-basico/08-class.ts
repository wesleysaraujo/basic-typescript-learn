class Animal {
    private specie:string

    private sound: string

    constructor(specie: string, sound: string) {
        this.specie = specie
        this.sound = sound
    }
    
    public getSpecie(): string {
        return this.specie
    }

    public getSound(): string {
        return this.sound
    }
}

const dog: Animal = new Animal('dog', 'auau')

console.log(`The animal is ${dog.getSpecie()}`)
console.log(`The ${dog.getSpecie()} sound is ${dog.getSound()}`)