/*Aula 4
A declaração const indica que se trata de uma variável que não será alterada
 em nenhuma instância do código.Isso significa que serão sempre quatro botões.
 Vamos declarar a variável const botoes, e atribuir a ela um comando que busca tudo
 que existe a classe botão.Queremos todas as informações relacionadas à classe, 
 por isso utilizaremos o querySelectorAll(), cujo interior dos parênteses receberá um
 .botao entre aspas, assim como nomeamos uma classe.*/

/*Laço de repetição for para adicionar um evento de escuta, principalmente quando os 
botões forem clicados, porque quando houver um clique, ele precisa adicionar a classe ativo no botão clicado.*/ 

/*Entre os parênteses de for(), o primeiro valor a ser adicionado é a declaração da variável i. 
Essa variável vai mudar ao longo do tempo no código, então ela é uma variável do tipo let. 
Vamos iniciá-la com o valor 0.Este laço irá se repetir enquanto i for menor que o comprimento dos botões 
(ou seja, botões.length) e vai incrementar de um por meio do comando i++, que é a mesma coisa que i = i + 1.*/

/*Adicionar um evento de escuta para  realizar uma ação,chamamos de .onClick(). Vamos abrir uma linha entre a 
declaração do for() e  adicionar botoes[i].onclick.*/ 

/*Esse on click, vai perguntar as ações que queremos realizar. E quando agrupamos uma série de comandos, 
criamos uma função.Então, à direita de botoes[i].onclick, adicionaremos um sinal de igual e uma function() 
com um bloco de chaves.Ela só precisa realizar uma tarefa para nós e para essa tarefa, quando ela for ativada, 
o botoes na posição i adicione a classe ativo. Adicionaremos entre as chaves da função um 
botoes[i].classList.add("ativo").*/

/*OBS: Antes de adicionar a classe ativo, poderíamos remover todas as classes ativo de todos os botões
 e só adicionar naquele que desejamos que receba a classe, então diremos ao sistema "remova", faremos um 
 laço de repetição for() dentro das chaves da function(), acima da linha que adiciona a classe.
 Esse laço receberá entre parênteses a variável let j=0, em seguida, adicionaremos o j++.
 Em vez de adicionar, vamos remover. Portanto, adicionaremos entre as chaves do for() um botoes na posição j 
 junto ao .classList.remove("ativo").

const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
    }
}
*/

/*Aula 5
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

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;



//Aula6 - conversão dos números em segundos, minutos, horas e dias.

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
}*/
/*

//Aula7 - Automatizando atualizações (código aula6 abaixo-atualizar)
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

// Adicionando outros objetivos, definição do tempo dos objetivos
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-05-30T00:00:00");
const tempoObjetivo2 = new Date("2024-12-06T00:00:00"); //adicionado
const tempoObjetivo3 = new Date("2024-12-20T00:00:00"); //adicionado
const tempoObjetivo4 = new Date("2024-12-31T00:00:00"); //adicionado

//Substituir a função chamada calculaTempo()
//automatizar o código, criar uma variável chamada tempos, que receberá uma lista(abaixo).

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];//adicionado

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

    //se o tempo for menor que zero, devemos programar para que seja exibida uma mensagem de que o prazo foi esgotado. 
    //Dessa forma, a contagem do tempo que resta ocorrerá apenas se esse tempo for positivo.
    if (tempoFinal > 0){
        return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos"; //adicionado 
    } else {
        return "Prazo Finalizado";
    }
}

 //Obs:laço de repetição que altera automaticamente o valor do índice para 0, 1, 2 e 3,automatizando o código.
//somente o primeiro contador recebeu a contagem de tempo então:
 Laço de repetição, mover a linha contadores[0].textContent = calculaTempo(tempos[0]);, que se refere 
 à nossa lista contadores, para dentro do nosso laço de repetição.

//função para atualizar o cronômetro e no escopo da função (entre chaves) adicionar o laço de repetição.
//substituindo o valor do índice (0) pela variável contadora i.

function atualizaCronometro(){ //adicionado
    for (let i=0; i<contadores.length;i++){ //adicionado
        contadores[i].textContent = calculaTempo(tempos[i]);  //adicionado
    }
}

//após a declaração da função, chamamos por ela novamente: 
// adicionar a função comecacronometro

function comecaCronometro(){ //adicionado
    atualizaCronometro(); //adicionado
    setInterval(atualizaCronometro,1000); //adicionado
}

comecaCronometro(); //adicionado
*/
/*
//Aula8-Continuação, sem alterações
//Aula9 - 
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

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-05-30T00:00:00");
const tempoObjetivo2 = new Date("2024-12-06T00:00:00"); //adicionado
const tempoObjetivo3 = new Date("2024-12-20T00:00:00"); //adicionado
const tempoObjetivo4 = new Date("2024-12-31T00:00:00"); //adicionado

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];


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
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0];
    }
}

function atualizaCronometro(){
    document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
    document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
    document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];
    document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];

    for (let i=0; i<contadores.length;i++){
       // contadores[i].textContent = calculaTempo(tempos[i]);   
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();
*/
//Aula10
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

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-05-30T00:00:00");
const tempoObjetivo2 = new Date("2024-12-06T00:00:00"); //adicionado
const tempoObjetivo3 = new Date("2024-12-20T00:00:00"); //adicionado
const tempoObjetivo4 = new Date("2024-12-31T00:00:00"); //adicionado

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

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
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0];
    }
}

function atualizaCronometro(){ //adicionar aula10
    for (let i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];   
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();