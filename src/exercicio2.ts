// ### Exercício 2

// Crie uma função que recebe uma data no formato "aaaa/mm/dd" e retorna outra string no formato "dd/mm/aaaa".<br>
// Exemplo: a entrada "2022/09/26" gera a saída "26/09/2022"<br>
// Crie pelo menos um teste que valida sua implementação.

// export const exercicio2 = (data : string): string =>{
//     return data.split("/").reverse().join("/");
    
// }

//Outra maneira de fazer
export const exercicio2 = (data : string): string =>{
   const partes = data.split("/")
   const dataFormada =  `${partes[2]}/${partes[1]}/${partes[0]}`;
    
   return dataFormada
}

