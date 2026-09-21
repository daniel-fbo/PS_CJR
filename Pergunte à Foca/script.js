const campo1 = document.querySelector(".opcao1");
const campo2 = document.querySelector(".opcao2");
const botaoPerguntar = document.querySelector(".botao-perguntar");
const botaoCerteza = document.querySelector(".botao-certeza");
const resposta = document.querySelector(".resposta");
const olhos = document.querySelectorAll(".olho");

let ultimaPergunta = "";
let vezesSeguidas = 0;
let escolhaAtual = "";
let outraOpcao = "";

function limpar(texto) {
    return texto.trim().toLowerCase();
}

// pra opções vazias ou iguais
function perguntaRuim(a, b) {
    return a.includes(b) || b.includes(a);
}

function perguntar() {
    const rawOp1 = campo1.value.trim();
    const rawOp2 = campo2.value.trim();
    const op1 = limpar(rawOp1);
    const op2 = limpar(rawOp2);

    botaoCerteza.classList.add("escondido");

    if (perguntaRuim(op1, op2)) {
        resposta.textContent = "Você está me testando?";
        ultimaPergunta = "";
        vezesSeguidas = 0;
        return;
    }

    const perguntaAgora = `${op1} ou ${op2}`;
    vezesSeguidas = (perguntaAgora === ultimaPergunta) ? vezesSeguidas + 1 : 1;
    ultimaPergunta = perguntaAgora;

    if (vezesSeguidas >= 5) {
        resposta.textContent = `Já falei que é ${escolhaAtual}, para de insistir.`;
        botaoCerteza.classList.add("escondido"); // <--- Esconde o botão de duvidar
        return;
    }

    const sorteio = Math.random() < 0.5;
    // guarda o texto original digitado pelo usuário
    escolhaAtual = sorteio ? rawOp1 : rawOp2;
    outraOpcao = sorteio ? rawOp2 : rawOp1;

    resposta.textContent = `A foca escolheu: ${escolhaAtual}`;
    botaoCerteza.classList.remove("escondido");
    soltarConfete();
}

// duviadar da resposta da foca
function temCerteza() {
    vezesSeguidas = 0;
    if (Math.random() < 0.5) {
        resposta.textContent = `Duvida de mim? Eu disse ${escolhaAtual} e pronto.`;
        botaoCerteza.classList.add("escondido");
    } else {
        const antiga = escolhaAtual;
        escolhaAtual = outraOpcao;
        outraOpcao = antiga;

        resposta.textContent = `Hmm... na verdade, agora acho que é ${escolhaAtual}.`;
        soltarConfete();
    }
}

const coresConfete = ["#26bd82", "#ffffff", "#a4adb8", "#438a6f"];

function soltarConfete() {
    for (let i = 0; i < 40; i++) {
        const confete = document.createElement("div");
        confete.classList.add("confete");

        confete.style.left = Math.random() * 100 + "vw";
        confete.style.backgroundColor = coresConfete[Math.floor(Math.random() * coresConfete.length)];
        confete.style.animationDuration = 2 + Math.random() * 2 + "s";
        confete.style.animationDelay = Math.random() * 0.5 + "s";

        confete.addEventListener("animationend", function () {
            confete.remove();
        });

        document.body.appendChild(confete);
    }
}

function olharPara(x, y) {
    olhos.forEach(function (olho) {
        const caixa = olho.getBoundingClientRect();
        const centroX = caixa.left + caixa.width / 2;
        const centroY = caixa.top + caixa.height / 2;
        const angulo = Math.atan2(y - centroY, x - centroX);

        olho.style.transform = "rotate(" + angulo + "rad)";
    });
}

document.addEventListener("mousemove", function (evento) {
    olharPara(evento.clientX, evento.clientY);
});

// pra caso esteja pelo celular
document.addEventListener("touchmove", function (evento) {
    const dedo = evento.touches[0];
    olharPara(dedo.clientX, dedo.clientY);
});

botaoPerguntar.addEventListener("click", perguntar);
botaoCerteza.addEventListener("click", temCerteza);