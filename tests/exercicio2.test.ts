import {exercicio2} from '../src/exercicio2'

describe("Testando exercicio2", () =>{
    test("deve retornar a data no formato dia/mes/ano", () =>{
        const data = exercicio2("2022-01-01")
        expect(data).toBe("01/01/2022")
    })
})