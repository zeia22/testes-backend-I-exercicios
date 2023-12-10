import { exercicio3 } from './../src/exercicio3';


describe("Testando exercicio3", () =>{
    test("deve retornar true pois trem o usuario Astrodev", () =>{
        const usuarioLista = exercicio3("Astrodev")
        expect(usuarioLista).toEqual(true)
    })
})