// ### Exercício 3

// Crie uma lista de usuários (você decide quais propriedades existem na sua tipagem) e desenvolva um teste garantindo que o Astrodev está presente nessa lista.<br>
// Crie pelo menos um teste que valida sua implementação.

interface Usuario{
   
    nome: string;
    username: string;
    email: string;
    member: boolean
}

export const exercicio3 = (str: string): boolean =>{
    const lista:Usuario[]  = [
    {  nome: "Astrodev", username: "astrodev", email: "astrodev@example.com",member: true },
    {  nome: "Ozéias", username: "zéião", email: "zeia22@example.com", member: false},
    {  nome: "Marcela", username: "marcelinha", email: "marcela@example.com",member: true }]

    const filtraLista = lista.some(item => item.nome === str)

    return filtraLista

}