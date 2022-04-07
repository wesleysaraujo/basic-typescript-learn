import Carro from '../../../src/Solid/SofSolid/GoodExample/Carro'

test('Objeto carro é to tipo carro', () => {
    let carro = new Carro(2013, 'New Fiesta', 'Ford', 'Branco')
    
    expect(carro).toBeInstanceOf(Carro)
})

test('Propriedados do carro', () => {
    let carro = new Carro(2013, 'New Fiesta', 'Ford', 'Branco')

    expect(carro.ano).toBe(2013)
    expect(carro.modelo).toBe('New Fiesta')
    expect(carro.marca).toBe('Ford')
    expect(carro.cor).toBe('Branco')
    expect(carro.velocidade).toBe(0)
})

test('Mudando a cor do carro', () => {
    let carro = new Carro(2013, 'New Fiesta', 'Ford', 'Branco')

    carro.cor = 'Preto'

    expect(carro.cor).toBe('Preto')
    expect(carro.getDetalheCarro()).toBe('Ford New Fiesta Preto ano 2013')
})

test('Detalhes do carro', () => {
    let carro = new Carro(2013, 'New Fiesta', 'Ford', 'Branco')

    expect(carro.getDetalheCarro()).toBe('Ford New Fiesta Branco ano 2013')
})

test('Carro acelera', () => {
    let carro = new Carro(2013, 'New Fiesta', 'Ford', 'Branco')
    carro.acelerar()
    expect(carro.velocidade).toBe(10)
})

test('Carro freia', () => {
    let carro = new Carro(2013, 'New Fiesta', 'Ford', 'Branco')
    
    carro.acelerar()
    carro.frear()
    
    expect(carro.velocidade).toBe(0)
})

test('Carro buzina', () => {
    let carro = new Carro(2013, 'New Fiesta', 'Ford', 'Branco')
    
    expect(carro.buzinar()).toBe('Beeeeeee')
})

