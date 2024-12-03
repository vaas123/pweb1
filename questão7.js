let tempC = parseFloat(prompt('Digite a sua temperatura em °C: '));

let conversao = (tempC * 9/5) + 32;
let tempF = conversao;

alert('A temperatura de ' + tempC + '°C' + ' para Fahrenheit é de: ' + tempF + 'F');
