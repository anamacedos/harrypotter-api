'use strict'
async function criarImagens(linkImagem, livro) {
    const divLivros = document.querySelector("#livros_test")
    const novaImagem = document.createElement('img')
    novaImagem.classList.add('fotolivro')
    novaImagem.src = linkImagem
    divLivros.appendChild(novaImagem)

    // Adicionando evento de clique para exibir os detalhes do livro
    novaImagem.addEventListener('click', function(event) {
        event.stopPropagation() // Evita que o clique feche o card imediatamente
        mostrarDetalhesLivro(livro)
    })
}

async function pesquisarImagens() {
    const url = "https://potterapi-fedeperin.vercel.app/en/books"
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function preencherImagens() {
    const livros = await pesquisarImagens()

    livros.forEach(function(livro){
        criarImagens(livro.cover, livro)
    })
}

function mostrarDetalhesLivro(livro) {
    document.getElementById("numero").textContent = `Número: ${livro.number}`
    document.getElementById("nome").textContent = livro.title
    document.getElementById("data").textContent = `Data Lançamento: ${livro.releaseDate}`
    document.getElementById("descricao").textContent = `Descrição: ${livro.description || "Sem descrição disponível."}`
    document.getElementById("paginas").textContent = `Páginas: ${livro.pages}`
    document.getElementById("imagemDadosLivro").src = livro.cover
    
    // Tornar o card visível
    document.getElementById("containerDadosLivro").style.display = "flex"
}

document.addEventListener("DOMContentLoaded", function() {
    // Esconde o card inicialmente
    document.getElementById("containerDadosLivro").style.display = "none"
    
    // Adiciona evento para esconder o card ao clicar fora dele
    document.addEventListener("click", function() {
        document.getElementById("containerDadosLivro").style.display = "none"
    })
    
    // Impede que um clique dentro do card o feche
    document.getElementById("containerDadosLivro").addEventListener("click", function(event) {
        event.stopPropagation()
    })
})

preencherImagens()