// -----------------------------------------------------------------------------------------------------------------------------
// VARIÁVEIS CRIADAS EM FUNÇÕES NÃO PODE SER UTILIZADAS FORA DELA, A NÃO SER QUE USE O RETURN
// -----------------------------------------------------------------------------------------------------------------------------

function teste(){
    let nome = "William";
    console.log(nome);

    var sobrenome = "Novak";
    console.log(sobrenome);
}

teste();

//console.log(nome);
//console.log(sobrenome);

// -----------------------------------------------------------------------------------------------------------------------------
// VARIÁVEIS DECLARADAS EM IF, WHILE, SWITCH, ETC.. SÓ PODEM SER UTILIZADAS FORA DO ESCOPO SE FOREM DO TIPO VAR (ESCOPO GLOBAL)
// -----------------------------------------------------------------------------------------------------------------------------
if(1){
    let nome = "William";
    console.log(nome);

    var sobrenome = "Novak";
    console.log(sobrenome);
}

//console.log(nome);
console.log(sobrenome);

// -----------------------------------------------------------------------------------------------------------------------------
// EXEMPLO ARROW FUNCION (CONSTANTE QUE EXECUTA FUNÇÃO) => RECEBE DOIS VALORES E RETORNA A SOMA
// VALOR PASSADO COMO PADRÃO É SUBSTITUIDO PELO VALOR PASSADO
// -----------------------------------------------------------------------------------------------------------------------------
const arrowFunc = (num1, num2 = 10) => {
    var res = num1 + num2;
    return res;
}

console.log(arrowFunc(5, 12));
console.log(arrowFunc(5));

// -----------------------------------------------------------------------------------------------------------------------------
// FUNÇÃO QUE RECEBE UM NÚMERO INFINITO DE PARÂMETROS (...ARGS) E CALCULA A SOMA
// -----------------------------------------------------------------------------------------------------------------------------
const somatorio = (...args) => {

    let sum = 0;

    for(let i = 0; i < args.length; i++){

        sum += args[i];

    }

    return sum;
}

console.log(somatorio(1,2,3,4,5));