/*
   Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.

Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
O salário a ser transferido é calculado da seguinte maneira: 

(valor bruto do salário - percentual de imposto mediante ao salário) + adicional dos benefícios

Para calcular o percentual de imposto segue as aliquotas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que R$ 2500.00 = 15.00%

Entrada
A entrada consiste em vários arquivos de teste, que conterá o valor bruto do salário e adicional 
dos benefícios. Conforme mostrado no exemplo de entrada a seguir.

Saída
Para cada arquivo da entrada, terá um arquivo de saída. E como mencionado no Desafio, 
será gerado uma linha com um número que será a diferença entre o valor bruto do salário 
e o percentual de imposto mediante a faixa salárial somado com o adicional dos benefícios. Use o exemplo abaixo para clarear o que está sendo pedido.
*/

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Função útil para o calculo do imposto (baseado nas aliquotas).

const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());


function calcularPorcentagem(valor, percentual) {
  return valor * (percentual / 100);
}


function pegarAliquota(salario) {
  if (salario >= 0 && salario <= 1100) {
    return 5;
  } else if (salario >= 1100.01 && salario <= 2500.00) {
    return 10;
 
  } else {
    return 15;
  }


}
const aliquotaImposto = pegarAliquota(valorSalario);


const valorImposto = calcularPorcentagem(valorSalario, aliquotaImposto);


const valorATransferir = valorSalario - valorImposto + valorBeneficios;

print(valorATransferir.toFixed(2));