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

async function criarCardDados(dados) {
    const divDados = document.getElementById('containerDadosLivro')
    const divImagemDados = document.getElementById('divimagem')
    const divTextosDados = document.getElementById('textosdados')

    const imagemDados = document.createElement
    const numero = document.createElement('p')
    const nome = document.createElement('p')
    const data = document.createElement('p')
    const descricao = document.createElement('p')
    const paginas = document.createElement('p')

}