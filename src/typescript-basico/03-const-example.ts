const devName = 'Wesley'
const age = 30

/**
 * Embora const assim como let também seja de escopo local, o valor de uma const  não pode ser alterado. 
 * Porém eu posso criar uma nova const com o mesmo nome, mas com um novo valor se eu eu estiver em um bloco/contexto diferente, mas atenção, essa nova const só existirá dentro do bloco.
if (age === 30) {
    devName = 'Pedro'
    age = 35
}
*/

console.log(devName, age)

if (age === 30) {
    const devName = 'Pedro'
    const age = 35

    console.log(devName, age)
}


console.log(devName, age)

// No caso de objetos a coisa muda um pouco de figura
// Embora não seja possível alterar o valor de uma constante, é possível alterar o valor de um atributo de um objeto de uma constante.

const obj = {
    name: 'Wesley',
    age: 30
}

if (obj.age === 30) {
    obj.name = 'Pedro'
    obj.age = 35
}

console.log(obj)