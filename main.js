const botaoPedra = document.getElementById("pedra")
const botaoPapel = document.getElementById("papel")
const botaoTesoura = document.getElementById("tesoura")
const textoResultado = document.getElementById("texto-resultado")
const textoPontuacaoJogador = document.getElementById("texto-pontuacao-jogador")
const textoPontuacaoMaquina = document.getElementById("texto-pontuacao-maquina")
let placarJogador = 0
let placarMaquina = 0
textoPontuacaoJogador.innerHTML = `Sua pontuação: <span>${placarJogador}</span>`
textoPontuacaoMaquina.innerHTML = `Pontuação da máquina: <span>${placarMaquina}</span>`

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
const jogar = (escolhaJogador) =>{
    // 1-pedra 2-papel 3-tesoura
    // 1 ganha de 3 e perde para 2
    // 2 ganha de 1 e perde para 3
    // 3 ganha de 2 e perde para 1
    const escolhaMaquina = getRandomIntInclusive(1,3)
    console.log(escolhaJogador)
    console.log(escolhaMaquina)

    verificarVitoria(escolhaJogador, escolhaMaquina)
}
const mudarPlacar = (resultado) => {
    if(resultado == true){
        placarJogador++
        textoPontuacaoJogador.innerHTML = `Sua pontuação: <span>${placarJogador}</span>`
        textoPontuacaoMaquina.innerHTML = `Pontuação da máquina: <span>${placarMaquina}</span>`
    }
    else{
        placarMaquina++
        textoPontuacaoJogador.innerHTML = `Sua pontuação: <span>${placarJogador}</span>`
        textoPontuacaoMaquina.innerHTML = `Pontuação da máquina: <span>${placarMaquina}</span>`
    }
}
const verificarVitoria = (escolhaJogador, escolhaMaquina) => {
    if(escolhaJogador == 1){
        if(escolhaMaquina == 3){
            textoResultado.innerHTML = "Você escolheu pedra e ganhou!"
            mudarPlacar(true)
        }
        else if(escolhaJogador == escolhaMaquina){
            textoResultado.innerHTML = "Você escolheu pedra e deu empate!"
        }
        else if(escolhaMaquina == 2){
            textoResultado.innerHTML = "Você escolheu pedra e perdeu!"
            mudarPlacar(false)
        }        
    }
    else if(escolhaJogador == 2){
        if(escolhaMaquina == 1){
            textoResultado.innerHTML = "Você escolheu papel e ganhou!"
            mudarPlacar(true)
        }
        else if(escolhaJogador == escolhaMaquina){
            textoResultado.innerHTML = "Você escolheu papel e deu empate!"
        }
        else if(escolhaMaquina == 3){
            textoResultado.innerHTML = "Você escolheu papel e perdeu!"
            mudarPlacar(false)
        }        
    }
    else if(escolhaJogador == 3){
        if(escolhaMaquina == 2){
            textoResultado.innerHTML = "Você escolheu tesoura e ganhou!"
            mudarPlacar(true)
        }
        else if(escolhaJogador == escolhaMaquina){
            textoResultado.innerHTML = "Você escolheu tesoura e deu empate!"
        }
        else if(escolhaMaquina == 1){
            textoResultado.innerHTML = "Você escolheu tesoura e perdeu!"
            mudarPlacar(false)
        }        
    }
}

