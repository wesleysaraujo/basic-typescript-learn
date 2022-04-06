let devRegister: object = {
    name: 'Wesley',
    age: 30,
    role: 'developer'
}

/**
* No primeiro exemplo, o objeto é declarado com o tipo object (em minisculo), esse tipo é do próprio typescript e foi adicionado a partir da versão 2.
* Ele foi criado para que possamos criar um objeto que não possa ter seu tipo alterado, como ocorre quando usamos o Object (do próprio js).
let devJob: Object = {
    role: 'developer',
    year: 2020,
    company: 'Google'
}

devJob = 'Google'

console.log(devJob)
*/

// Exemplo do uso do any
let devJob: any = {
    role: 'developer',
    year: 2020,
    company: 'Google'
}

console.log(devJob)

devJob = 'developer at Google since 2020'

console.log(devJob)