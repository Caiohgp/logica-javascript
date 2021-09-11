function calcular2(){
    var valor1, valor2, operacao, resultado
    alert("Calculadora dahora")
    alert("Vou te pedir 2 números, depois você vai me dizer a operação que deseja realizar")
    valor1 = prompt("Vamos lá, me diga o primeiro número")
    valor2 = prompt("Agora me diga o segundo número")
    operacao = prompt("Agora informe a operação. \n Operações válidas: + , - , * , /")
    
    switch (operacao) {
        case "+":
            resultado = parseInt(valor1) + parseInt(valor2)
            break;
        case "-":
            resultado = parseInt(valor1) - parseInt(valor2)
            break;
        case "*":
            resultado = parseInt(valor1) * parseInt(valor2)
            break;

        case "/":
            resultado = parseInt(valor1) / parseInt(valor2)
            break;

        default:
            resultado = "Operação inválida, insira uma opção válida (+ , - , * , /)"
            break;

    }

    document.getElementById("conteudo").innerText = "Resultado = " + resultado;
}