function compararNumeros(){
    
    var valor1, valor2;
    alert("Esse programa compara dois numeros e diz se são iguais ou não")
    valor1 = prompt("Insira o primeiro numero");
    valor2 = prompt("Insira o segundo numero");

    if (valor1 == valor2){
        document.getElementById("conteudo").innerText = valor1 + " é igual a " + valor2;
    }
    else{
        document.getElementById("conteudo").innerText = valor1 + " é diferente de " + valor2;
    }
}