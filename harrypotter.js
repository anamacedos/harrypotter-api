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
    
    const imagemEncontradaPersonagem = []

    data.forEach(function(item){
        imagemEncontradaPersonagem.push(item.image)
    })


    return imagemEncontradaPersonagem
}

async function preencherPersonagens(){
    const personagemDigitado = document.getElementById('pesquisarpersonagens').value
    const fotosPersonagem = await pesquisarPersonagens(personagemDigitado)

    const galeriaPersonagens = document.getElementById('galeriapersonagens')
    // galeriaPersonagens.replaceChildren('')
    fotosPersonagem.forEach(criarCardPersonagem)
    console.log(fotosPersonagem)
}

document.getElementById('pesquisar').addEventListener('click', preencherPersonagens)

