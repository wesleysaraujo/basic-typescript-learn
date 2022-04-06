// boolean
let success: boolean = true

// string
let successMessage: string = 'All good'

// number
let code: number = 200 // int
let price: number = 29.99 // float

// Array
let list: Array<String> = ['Wesley', 'Pedro', 'Juan'] // Array de strings declarado usando type parameter
let listNames: string[] = ['Wesley', 'Pedro', 'Juan'] // Array de strings declarado usando type annotation, nesse meu array é uma coleção de strings

// Enum
enum Color { branco = 'White', preto = 'Black', vermelho = 'Red' }

console.log(Color.branco)
console.log(Color.preto)
console.log(Color.vermelho)