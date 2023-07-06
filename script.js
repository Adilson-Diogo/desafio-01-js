/*
  Exercicio 01

  Crie uma aplicacao que solicite ao usuario inserir dois numeros e,
  a partir dai calcular:

    A soma do dois numeros;
    A subtracao dos dois numeros
    A multiplicacao dos dois numeros
    A divisao dos dois numeros
    O resto da divisao dos dois numeros

  Verificar se a soma dos dois numeros e par ou impar
  Verificar se os dois numeros inseridos sao iguais ou diferentes

*/

function verificarResposta() {
    // solicitacao dos dois numeros
    const firstNumber = Number(prompt("Digite o primeiro numero"))
    const secondNumber = Number(prompt("Digite o segundo numero"))
  
    // verifica se os numeros inseridos sao iguais ou diferentes
    if(firstNumber == secondNumber) {
      alert('os numeros inseridos sao iguais')
    } else {
      alert('os numeros inseridos sao diferentes')
    }
  
    // os dois numeros sao calculados e atribuidos em variaveis 
    const sum = firstNumber +  secondNumber 
    const sub = firstNumber - secondNumber
    const mult = firstNumber * secondNumber
    const div = firstNumber / secondNumber
    const res = (firstNumber % secondNumber).toFixed(2)
  
    // verifica se o resultado da soma dos dois numeros e um numero par ou impar
    if(sum % 2 == 0) {
      alert(`${sum} e um numero par`)
    } else {
      alert(`${sum} e um numero Impar`)
    } 
    
    // exibe mensagem na tela
    alert(`
      A soma do dois numeros e: ${sum}
      A subtracao dos dois numeros e: ${sub}
      A multiplicacao dos dois numeros e: ${mult}
      A divisao dois numeros e: ${div}
      O resto da divisao dos dois numeros e: ${res}1
    `)
    }
  
  // execucao da funcao
  verificarResposta()
  
  