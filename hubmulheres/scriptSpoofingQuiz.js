const question = document.querySelector(".question"); 
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");
/* document.querySelector() selecionando os elementos HTML relevantes e
os armazenando em variáveis para uso posterior */

import questions from "./questionsSpoofing.js";
/* ele importa as perguntas do arquivo */

let currentIndex = 0;
let questionsCorrect = 0;
/* currentIndex para rastrear o índice da pergunta atual
questionsCorrect para contar o número de perguntas respondidas corretamente */

btnRestart.onclick = () => {
content.style.display = "flex";
contentFinish.style.display = "none";
/* btnRestart.onclick é definida para reiniciar o quiz quando o botão de reinício é clicado. 
Isso redefine o estado do quiz e carrega a primeira pergunta novamente. */

currentIndex = 0;
questionsCorrect = 0;
loadQuestion();
};

function nextQuestion(e) { 
if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
}
/* nextQuestion(e) é responsável por lidar com a lógica quando o usuário seleciona uma resposta.
Ele verifica se a resposta selecionada está correta e atualiza questionsCorrect de acordo.
Em seguida, avança para a próxima pergunta ou finaliza o quiz, dependendo de se ainda há perguntas restantes. */

if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
} else {
    finish();
}
}

function finish() {
textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
content.style.display = "none";
contentFinish.style.display = "flex";
}
/* finish() é chamada quando todas as perguntas foram respondidas.
Ela exibe o número total de perguntas corretas e oculta a seção de perguntas */

function loadQuestion() {
spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
const item = questions[currentIndex];
answers.innerHTML = "";
question.innerHTML = item.question;
/* loadQuestion() é responsável por carregar uma nova pergunta.
Ela atualiza o contador de perguntas, exibe a pergunta atual e suas opções de resposta.
Além disso, ela adiciona um evento de clique a cada opção de resposta para chamar nextQuestion()
quando selecionada */

item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
    ${answer.option}
    </button>
    `;

    answers.appendChild(div);
});

document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
});
}

loadQuestion();