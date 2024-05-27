export default [
    {
        question: "Qual a linguagem padrão utilizada para gerenciar bancos de dados?",
        answers: [
            { option: "Java, C# e SQL", correct: false },
            { option: "SQL", correct: true },
            { option: "Python, JavaScript e HTML", correct: false },
        ],
    },
    {
        question: "Como os criminosos executam ataques de injeção de SQL?",
        answers: [
            { option: "Através de engenharia social, induzindo a vítima a clicar em links maliciosos enviados por e-mails.", correct: false },
            { option: "Injetando linhas de código SQL maliciosos em consultas ao banco de dados.", correct: true },
            { option: "Instalando softwares maliciosos no computador, impede o acesso ao equipamento infectado.", correct: false },
        ],
    },
    {
        question: "Qual o principal objetivo dos ataques de injeção de SQL?",
        answers: [
            { option: "Obter acesso não autorizado a informações confidenciais, pessoais.", correct: true },
            { option: "Desativar o site ou aplicativo da vítima.", correct: false },
            { option: "Enviar spam para os contatos da vítima.", correct: false },
        ],
    },
    {
        question: "Qual a medida mais importante para se proteger contra ataques de injeção de SQL?",
        answers: [
            { option: "Reduzir a exposição do banco de dados.", correct: false },
            { option: "Capacitar a equipe de desenvolvimento em boas práticas de segurança.", correct: false },
            { option: "Todas as alternativas acima", correct: true },
        ],
    },
];
