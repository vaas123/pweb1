
let salario = parseFloat(prompt("Digite o salario do funcionario: "));

let percentual = parseFloat(prompt("Digite o percentual de aumento(%): "));

let aumento = salario * (percentual / 100);

let novosalario = salario + aumento;

alert("O valor de aumento é: R$" + aumento );

alert("O novo salario é: R$" + novosalario);
