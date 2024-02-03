alert('Boas vindas ao jogo do numero secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() *numeroMaximo + 1);
let chute;
let tentativas = 1;



// (while = Enquanto)  o chute não for igual ao n.s
while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
    break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O numero é secreto é maior que ${chute}`);
        }
        tentativas++;  // Incrementar +1  em uma variável 
    }
   
}
// Operador tenário
let palavrasTentativa = tentativas > 1 ? `tentativas`: `tentativa`;
alert(`Você descobriu o numero secreto, é o ${numeroSecreto} com ${tentativas} ${palavrasTentativa}.`);



/*
if (tentativas > 1) {
    alert(`Você descobriu o numero secreto é o ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Você descobriu o numero secreto é o ${numeroSecreto} com ${tentativas} tentativa.`);
}
*/

