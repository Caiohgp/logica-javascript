function calculaMediaNotas(){

    var nota1, nota2, media,nome, passou;

    passou = false;

    nome = prompt ("Qual é o seu nome?");
    nota1 = prompt("Qual é a primeira nota?");
    nota2 = prompt("Qual é a segunda nota?");
    media = (parseInt(nota1) + parseInt(nota2)) /2 ;

    if(media >= 5){
        passou = true;
    }

    if (passou == true){
        alert("Aprovado!");

    }
    else{
        alert("Reprovado!")
    }
    document.getElementById("conteudo").innerText = "Olá " + nome + ", a sua média é " + media
}