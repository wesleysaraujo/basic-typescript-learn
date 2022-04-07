import Mecanico from '../../../src/Solid/SofSolid/GoodExample/Mecanico'
import Carro from '../../../src/Solid/SofSolid/GoodExample/Carro'

const carro = new Carro(2013, 'New Fiesta', 'Ford', 'Branco')
const mecanico = new Mecanico(carro)

test('Objeto carro que está no mecânico é to tipo Carro', () => {
    expect(mecanico.carro).toBeInstanceOf(Carro)
})

test('Objeto mecanico é do tipo Mecanico', () => {
    expect(mecanico).toBeInstanceOf(Mecanico)
})

test('Detalhes do carro que está no mecanico', () => {
    expect(mecanico.carro.getDetalheCarro()).toBe('Ford New Fiesta Branco ano 2013')
})

test('Trocar o pneu do carro que está no mecanico', () => {
    expect(mecanico.trocarPneu()).toBe('Trocando pneu do Ford New Fiesta Branco ano 2013')
})

test('Trocar o óleo do carro que está no mecanico', () => {
    expect(mecanico.trocarOleo()).toBe('Trocando oleo do Ford New Fiesta Branco ano 2013')
})
