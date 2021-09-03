var nome, idade

nome = prompt("Qual é o seu nome? ");
idade = prompt("Qual é a sua idade? ");

document.getElementById("titulo").innerText = "Olá " + nome + ", sua idade é " + idade;