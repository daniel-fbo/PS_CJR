const textoCargo = "Desenvolvedor de Software em formação...";
const elementoDigitado = document.querySelector("#texto-digitado");
let posicao = 0;

function digitarLetra() {
    elementoDigitado.textContent += textoCargo[posicao];
    posicao++;
    if (posicao < textoCargo.length) {
        setTimeout(digitarLetra, 90);
    }
}

digitarLetra();


const elementoHora = document.querySelector("#hora");
function atualizarRelogio() {
    const agora = new Date();
    elementoHora.textContent = agora.toLocaleTimeString("pt-BR");
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);



const botaoCopiar = document.querySelector("#botao-copiar");
const email = document.querySelector("#email").textContent.trim();

function voltarTextoDoBotao() {
    botaoCopiar.textContent = "Copiar e-mail";
}

botaoCopiar.addEventListener("click", function () {
    navigator.clipboard.writeText(email)
        .then(function () {
            botaoCopiar.textContent = "Copiado!";
            setTimeout(voltarTextoDoBotao, 2000);
        })
        .catch(function () {
            botaoCopiar.textContent = "Não consegui copiar";
            setTimeout(voltarTextoDoBotao, 2000);
        });
});