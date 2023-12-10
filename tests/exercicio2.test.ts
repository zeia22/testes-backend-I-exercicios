// import {exercicio2} from '../src/exercicio2'

// describe("Testando exercicio2", () =>{
//     test("deve retornar a data no formato dia/mes/ano", () =>{
//         const data = exercicio2("2022-01-01")
//         expect(data).toBe("01/01/2022")
//     })
// })

import {exercicio2} from "../src/exercicio2"

describe(" Exercicio 2", () => {

  test("Função que recebe uma data em formado americano e converte para formato BRL ", () => {
  
    const resultado = exercicio2("2023/12/05");
    expect(resultado).toEqual("05/12/2023")
  })
})