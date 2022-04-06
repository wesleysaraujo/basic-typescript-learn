let myName: any = 'Wesley'

// Jeito incorreto: 
// let countMyName = myName.length

// Jeitos Corretos:
//let countMyName = (<string>myName).length
let countMyName = (myName as string).length

console.log(countMyName)

// Exemplo de conversão usando objetos
let myLife: object = {
    name: 'Wesley',
    age: 30,
    role: 'developer',
    job: 'developer at Google since 2020'
};

// Se eu quiser adicionar um novo atributo ao meu objeto, eu posso fazer isso?
// myLife.year = 2020 // Não é possível, pois o type script não permite alterar o tipo de um objeto
// Para adicionar um novo atributo, eu posso fazer isso:
(myLife as any).year = 2020

console.log(myLife)