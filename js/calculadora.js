function calcular(){
    var valor1, valor2, operacao, resultado
    alert("Olá, esse é a minha calculadora :D")
    alert("Vou te pedir 2 números, depois você vai me dizer a operação que deseja realizar")
    valor1 = prompt("Vamos lá, me diga o primeiro número")
    valor2 = prompt("Agora me diga o segundo número")
    operacao = prompt("Agora informe a operação. \n Operações válidas: + , - , x , /")
    if(operacao == "+"){
        resultado = parseInt(valor1) + parseInt(valor2)
    } else if(operacao == "-"){
        resultado = parseInt(valor1) - parseInt(valor2)
    } else if(operacao == "*"){
        resultado = parseInt(valor1) * parseInt(valor2)
    } else if(operacao == "/"){
        resultado = parseInt(valor1) / parseInt(valor2)
    }

    document.getElementById("resultado").innerText = "Resultado = " + resultado;
}