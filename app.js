alert('Olá! Bem vindo(a) ao jogo Número Secreto');
let nome = prompt('Qual o seu nome?');
alert(`Boas vindas, ${nome}.`);
let numeroMaximo = 500
let numeroSecreto = parseInt (Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute; 
let tentativas = 1; 

//enquantoo chute não for igual ao Número Secreto:
while (chute != numeroSecreto){
     chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao número secreto
    if (chute == numeroSecreto){
        break;
    } 
    else {
        if (chute > numeroSecreto){
            alert(`O Número Secreto é menor do que ${chute}`); 
        }
        else {
            alert(`O Número Secreto é maior do que ${chute}`);
        }
        // tentativas = tentativas +1;
        tentativas++; 
    }

    //if e else são condições e/se na linguangem de programação

    };

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

    //if (tentativas > 1){
    //    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    //    } else {
    //    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
    //}