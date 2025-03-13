'use strict'

function criarCardPersonagem(linkPersonagem){
    const galeriaPersonagens = document.getElementById('galeriapersonagens')
    const novaImagemPersonagem = document.createElement('img')
    novaImagemPersonagem.src = linkPersonagem
    galeriaPersonagens.appendChild(novaImagemPersonagem)
}

async function pesquisarPersonagens(personagem){
    const url = `https://potterapi-fedeperin.vercel.app/en/characters?search=${personagem}`
    const response = await fetch(url)
    const data = await response.json()

    // A API retorna um array de personagens, e cada personagem tem a chave 'image'
    const imagemEncontradaPersonagem = data.map(item => item.image)

    return imagemEncontradaPersonagem
}

async function preencherPersonagens(){
    const personagemDigitado = document.getElementById('pesquisarpersonagens').value
    const fotosPersonagem = await pesquisarPersonagens(personagemDigitado)

    const galeriaPersonagens = document.getElementById('galeriapersonagens')
    galeriaPersonagens.replaceChildren('')  // limpa a galeria antes de adicionar as novas imagens

    fotosPersonagem.forEach(criarCardPersonagem)  // Exibe cada imagem
    console.log(fotosPersonagem)  // Verifica as imagens no console
}

document.getElementById('pesquisar').addEventListener('click', preencherPersonagens)

