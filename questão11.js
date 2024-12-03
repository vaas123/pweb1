let nota1 = parseFloat(prompt("Digite a nota 1:"));
let nota2 = parseFloat(prompt("Digite a nota 2:"));
let nota3 = parseFloat(prompt("Digite a nota 3:"));
let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  alert("ALUNO APROVADO");
} else {
  alert("ALUNO REPROVADO");
}
