function calcularIdade(){
    var contador, vezes, nome

    alert("Esse programa calcula a idade um numero x de vezes");
    vezes = prompt("Digite o número de vezes que deseja calcular: ");
    contador = 0;

    while(contador < vezes){
        nome = prompt("Olá, qual é o seu nome?");
        idade = prompt(nome + ", qual é a sua idade?");

        if(idade < 18){
            alert(nome + ", você é menor de idade") 
        }else{
            alert(nome + ", você é maior de idade") 
        }
        contador++;
    }
    
}
