/*const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");

//chamar uma função chamada calculaTempo(), que terá como parâmetro de entrada o tempoObjetivo1.
contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
 
 return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}
*/
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

/*1ª explicação

// definição do tempo dos objetivos
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
const tempoObjetivo2 = new Date("2024-10-30T00:00:00");
const tempoObjetivo3 = new Date("2024-11-05T00:00:00");
const tempoObjetivo4 = new Date("2024-12-30T00:00:00");

//chamar uma função chamada calculaTempo(), que terá como parâmetro inicial de entrada o tempoObjetivo1.
contadores[0].textContent = calculaTempo(tempoObjetivo1); //aba de divisão de conteúdo, que vai receber a função
contadores[1].textContent = calculaTempo(tempoObjetivo2); //aba de divisão de conteúdo, que vai receber a função
contadores[2].textContent = calculaTempo(tempoObjetivo3); //aba de divisão de conteúdo, que vai receber a função
contadores[3].textContent = calculaTempo(tempoObjetivo4); //aba de divisão de conteúdo, que vai receber a função

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
 
 return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}
Fim da 1ª explicação*/ 

/*2ª explicação - Automatizando o código:

// definição do tempo dos objetivos
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
const tempoObjetivo2 = new Date("2024-10-30T00:00:00");
const tempoObjetivo3 = new Date("2024-11-05T00:00:00");
const tempoObjetivo4 = new Date("2024-12-30T00:00:00");

//Substituir a função chamada calculaTempo()
//automatizar o código, criar uma variável chamada tempos, que receberá uma lista.
const tempos =
[tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

//laço de repetição que altera automaticamente o valor do índice para 0, 1, 2 e 3,automatizando o código.
for (let i = 0; i < contadores.length; i++) {
    contadores[i].textContent = calculaTempo(tempos[0]);
    }

//substituindo o valor do índice (0) pela variável contadora i.
for (let i = 0; i < contadores.length; i++) {
    contadores[i].textContent = calculaTempo(tempos[i]);
    }

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
 
 return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}
Fim da 2ª explicação */

//3ª explicação - função para atualizar o cronômetro:

// definição do tempo dos objetivos
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
const tempoObjetivo2 = new Date("2024-10-30T00:00:00");
const tempoObjetivo3 = new Date("2024-11-05T00:00:00");
const tempoObjetivo4 = new Date("2024-12-30T00:00:00");

//automatizar o código, criar uma variável chamada tempos, que receberá uma lista.
const tempos =
[tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

//substituindo o valor do índice (0) pela variável contadora i.
for (let i = 0; i < contadores.length; i++) {
    contadores[i].textContent = calculaTempo(tempos[i]);
    }

//função para atualizar o cronômetro e no escopo da função (entre chaves) adicionar o laço de repetição.
function atualizaCronometro(){
     for (let i=0; i<contadores.length;i++){
    contadores[i].textContent = calculaTempo(tempos[i]); } 
}

//após a declaração da função, chamamos por ela novamente:

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
    } else {
        return "Prazo Finalizado";
    }
}
/*se o tempo for menor que zero, devemos programar para
que seja exibida uma mensagem de que o prazo foi esgotado. Dessa
forma, a contagem do tempo que resta ocorrerá apenas se esse tempo
for positivo.*/