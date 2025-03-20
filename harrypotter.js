'use strict'
//funções para criação dos cards personagens
function criarCardPersonagem(linkPersonagem){
    const galeriaPersonagens = document.getElementById('galeriapersonagens')
    const novaImagemPersonagem = document.createElement('img')
    novaImagemPersonagem.src = linkPersonagem.image
    novaImagemPersonagem.onclick = () =>
    galeriaPersonagens.appendChild(novaImagemPersonagem)

    novaImagemPersonagem.classList.add('imagempersonagem')
}

async function pesquisarPersonagens(personagem){
    const url = `https://potterapi-fedeperin.vercel.app/en/characters?search=${personagem}`
    const response = await fetch(url)
    const data = await response.json()
    
    const arrayDadosPersonagem = []

    data.forEach(function(item){
        arrayDadosPersonagem.push(item)
    })


    return arrayDadosPersonagem
}
//personagem através da pesquisa
async function preencherPersonagens(){
    const personagemDigitado = document.getElementById('pesquisarpersonagens').value
    const fotosPersonagem = await pesquisarPersonagens(personagemDigitado)

    const galeriaPersonagens = document.getElementById('galeriapersonagens')
    galeriaPersonagens.replaceChildren('')
    fotosPersonagem.forEach(criarCardPersonagem)
}
//personagem aleatório ao carregar a página
async function carregarPersonagensAleatorios(){
    const url =  "https://potterapi-fedeperin.vercel.app/en/characters/random"
    const response = await fetch(url)
    const data = await response.json()
    const arrayDadosPersonagemAleatorio = []

    // data.forEach(function(item){
        arrayDadosPersonagemAleatorio.push(data)
    // })

    const galeriaPersonagens = document.getElementById('galeriapersonagens')
    // galeriaPersonagens.replaceChildren('')
    arrayDadosPersonagemAleatorio.forEach(criarCardPersonagem)

    // const nomePersonagem = data.fullName
}
for (let i = 0; i < 10; i++) {
    carregarPersonagensAleatorios()
}
document.getElementById('pesquisar').addEventListener('click', preencherPersonagens)








//criar card de informações sobre a casa ao passar o mouse
function criarCardCasas(linkCasa){
    const containerInformacoesCasa = document.getElementById('informacoes')
    const divInformacoesCasa = document.createElement('div')
    const nomeCasa = document.createElement('p')
    const emojiCasa = document.createElement('p')
    const fundadorCasa = document.createElement('p')
    const coresCasa = document.createElement('p')
    const Casa = document.createElement('p')
}

