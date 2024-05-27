export default [
    {
        question: "Como os ataques de negação de serviço (DoS) tornam os serviços online inacessíveis aos usuários legítimos?",
        answers: [
        { option: "Modificando as senhas de acesso aos serviços", correct: false },
        { option: "Sobrecarregando os recursos do sistema alvo com tráfego excessivo", correct: true },
        { option: "Bloqueando o acesso à internet", correct: false },
        ],
    },
    {
        question: "Qual é o objetivo dos ataques de sobrecarga de recursos (Resource Exhaustion Attacks)?",
        answers: [
        { option: "Consumir toda a largura de banda disponível", correct: false },
        { option: "Esgotar os recursos disponíveis no sistema alvo, como CPU, memória ou armazenamento", correct: true },
        { option: "Explorar falhas em protocolos de rede", correct: false },
        ],
    },
    {
        question: "O que é um exemplo de ataque de protocolo (Protocol Attack) mencionado no texto?",
        answers: [
        { option: "Ataque de Injeção SQL", correct: false },
        { option: "Ataque SYN Flood", correct: true },
        { option: "Ataque de Sobrecarga de Banda Larga", correct: false },
        ],
    },
    {
        question: "Qual é uma medida de mitigação recomendada para lidar com ataques de negação de serviço (DoS)?",
        answers: [
        { option: "Desativar todos os serviços online temporariamente", correct: false },
        { option: "Contratar mais funcionários para lidar com os ataques", correct: false },
        { option: "Utilizar sistemas de mitigação de DDoS que identificam e filtram o tráfego malicioso em tempo real", correct: true },
        ],
    },
    ];