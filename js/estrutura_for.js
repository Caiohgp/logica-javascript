function calcularFatorial(){
    var fatorial, numero;

    alert("Esse programa calcula o fatorial de um número");
    numero = prompt("Digite o número para o cálculo do fatorial: ");
    fatorial = 1;

    for (let contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador
    }

    document.getElementById("conteudo").innerText = "O fatorial do numero é " + fatorial
    
}

