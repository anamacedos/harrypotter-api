'use strict'
async function criarImagens(linkImagem) {
    
    const divLivros = document.querySelector("#livros_test")
    const novaImagem = document.createElement('img')
    novaImagem.src = linkImagem
    
    divLivros.appendChild(novaImagem)

    novaImagem.classList.add('imagemlivro')
}

async function pesquisarImagens() {
    const url = "https://potterapi-fedeperin.vercel.app/en/books"
    const response = await fetch(url)
    const data = await response.json()
    const arrayDeLivros = []
    console.log(data)
    data.forEach(function(item){
        arrayDeLivros.push(item.cover)
    })
    return arrayDeLivros
}

async function preencherImagens() {
    const imagens = await pesquisarImagens()

    // const divImagens = document.getElementById('livros')

        imagens.forEach(function(item){
            criarImagens(item)
        })
}

preencherImagens()