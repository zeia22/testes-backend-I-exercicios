import { exercicio1 } from './../src/exercicio1';

describe("testando exercicio1", () =>{
    test("deve retornar um numero inteiro", () =>{
        const result = exercicio1("50")
        expect(result).toBe(50)
    })
})


