function showWithVar() {
    var name = "Juan"
    var age = 30

    if (age === 30) {
        var name = "Pedro"
        var age = 35
    }

    var sentence = "Hello, my name is " + name + " and I'm " + age + " years old"
    console.log(sentence)
}

showWithVar()

function showWithLet() {
    let name = "Juan"
    let age = 30

    if (age === 30) {
        let name = "Pedro"
        let age = 35
    }

    let sentence = "Hello, my name is " + name + " and I'm " + age + " years old"
    console.log(sentence)
}

showWithLet()

function showWithLetRefactory() {
    let name = "Juan"
    let age = 30

    if (age === 30) {
        name = "Pedro"
        age = 35
    }

    let sentence = "Hello, my name is " + name + " and I'm " + age + " years old"
    console.log(sentence)
}

showWithLetRefactory()