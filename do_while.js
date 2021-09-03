function loopsomar(){
    var valor1, valor2, resultado, parar;

    do {
        alert("Esse programa efetua a soma entre dois númeors, até que o usuário queira parar");
        valor1 = prompt("Por favor, digite o primeiro valor");
        valor2 = prompt("Por favor, digite o segundo valor");
        resultado = parseInt(valor1) + parseInt(valor2);
        alert("O seu resultado é: " + resultado)
        parar = prompt("Deseja efetuar outra soma?")

    } while (parar.toUpperCase() == "S");

    document.getElementById("conteudo").innerText = parar
}