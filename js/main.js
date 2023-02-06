const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const estatisticas = document.querySelectorAll("[data-estatistica]");
const selecionaRobotron = document.querySelector('#click_robotron');
const controle = document.querySelectorAll('[data-controle]');
let loopTrocaRobotron = 0;
const listaImagensRobotron = [
    {
        cor: "Amarelo",
        endereco: "Robotron 2000 - Amarelo.png"
    },
    {   cor:"Azul",
        endereco: "Robotron 2000 - Azul.png"
    },
    {
        cor:"Branco",
        endereco: "Robotron 2000 - Branco.png"
    },
    {
        cor:"Preto",
        endereco: "Robotron 2000 - Preto.png"
    },
    {
        cor:"Rosa",
        endereco: "Robotron 2000 - Rosa.png"
    },
    {
        cor:"Vermelho",
        endereco: "Robotron 2000 - Vermelho.png"
    },
]
var frasePraFalar,clickFala,trocaRobotron;
frasePraFalar = "[...]Trocando cor do Robotron[...]Clique para continuar!";
clickFala = function() {
    window.alert(frasePraFalar);
}
trocaRobotron = function() {
    tamanhoDaListaImagensRobotron = (Object.keys(listaImagensRobotron).length);
    if (loopTrocaRobotron >= tamanhoDaListaImagensRobotron) {
        loopTrocaRobotron = 0;
    } else {
        enderecoDaImagem = ("img/"+listaImagensRobotron[loopTrocaRobotron].endereco)
        selecionaRobotron.src=enderecoDaImagem
        loopTrocaRobotron++
    }
}
selecionaRobotron.addEventListener("click", clickFala);
selecionaRobotron.addEventListener("click", trocaRobotron);

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {

        const textoTargetEvento = evento.target.dataset.controle;
        const nodoPai = evento.target.parentNode
        const pecaEmQuestao = evento.target.dataset.peca;
        
        manipulaDados(textoTargetEvento,nodoPai);
        atualizaEstatisticas(pecaEmQuestao);
    })        
})

function manipulaDados (operacao,nodoPaidoBotao) {

    const peca = nodoPaidoBotao.querySelector("[data-contador]");

    if (operacao === "-"){
        if (peca.value > 0) {
            peca.value = parseInt(peca.value) - 1;
        }
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}
function atualizaEstatisticas(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}



