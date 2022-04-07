import Carro from '../../../src/Solid/SofSolid/GoodExample/Carro'
import LavaJato from '../../../src/Solid/SofSolid/GoodExample/LavaJato'

const carro = new Carro(2013, 'New Fiesta', 'Ford', 'Branco')
const lavaJato = new LavaJato(carro)

test('Objeto carro que está no lava jato é to tipo carro', () => {
    expect(lavaJato.carro).toBeInstanceOf(Carro)
})

test('Objeto lava jato é do tipo LavaJato', () => {
    expect(lavaJato).toBeInstanceOf(LavaJato)
})

test('Detalhes do carro que está no lava jato', () => {
    expect(lavaJato.carro.getDetalheCarro()).toBe('Ford New Fiesta Branco ano 2013')
})

test('Lavar o carro que está no lava jato', () => {
    expect(lavaJato.lavar()).toBe('Lavando o Ford New Fiesta Branco ano 2013')
})

test('Polir o carro que está no lava jato', () => {
    expect(lavaJato.polir()).toBe('Polindo o Ford New Fiesta Branco ano 2013')
})