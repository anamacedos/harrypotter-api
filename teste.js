'use strict'

// Função para criar as imagens dos personagens na galeria
async function criarImagensPersonagem(linkImagem, personagem) {
    const divPersonagens = document.querySelector("#galeriapersonagens")
    const novaImagem = document.createElement('img')
    novaImagem.src = linkImagem
    novaImagem.classList.add('imagempersonagem')
    divPersonagens.appendChild(novaImagem)

    // Adiciona o evento de clique para exibir os detalhes do personagem
    novaImagem.addEventListener('click', function(event) {
        event.stopPropagation()// Evita que o clique feche o card imediatamente
        mostrarDetalhesPersonagem(personagem)
    });
}

// Função para buscar os personagens da API
async function pesquisarPersonagens() {
    const url = "https://potterapi-fedeperin.vercel.app/en/characters"
    const response = await fetch(url)
    const data = await response.json()
    return data;
}

// Função para preencher a galeria com as imagens dos personagens
async function preencherImagensPersonagens() {
    const personagens = await pesquisarPersonagens()

    personagens.forEach(function(personagem) {
        criarImagensPersonagem(personagem.image, personagem)
    })
}

// Função para mostrar os detalhes do personagem no card
function mostrarDetalhesPersonagem(personagem) {
    document.getElementById("nome").textContent = `Nome: ${personagem.name}`
    document.getElementById("Apelido").textContent = `Apelido: ${personagem.nickname || "Não informado"}`
    document.getElementById("casa").textContent = `Casa: ${personagem.house || "Não informado"}`
    document.getElementById("filhos").textContent = `Filhos: ${personagem.children || "Não informado"}`
    document.getElementById("autor").textContent = `Ator: ${personagem.actor || "Não informado"}`
    document.getElementById("datanascimento").textContent = `Data de nascimento: ${personagem.dob || "Não informado"}`
    document.getElementById("imagemDadosPersonagem").src = personagem.image

    // Torna o card visível
    document.getElementById("containerDadospersonagem").style.visibility = "visible"
}

// Código para ocultar o card ao clicar fora dele
document.addEventListener("DOMContentLoaded", function() {
    // Esconde o card inicialmente
    document.getElementById("containerDadospersonagem").style.visibility = "hidden"
    
    // Adiciona evento para esconder o card ao clicar fora dele
    document.addEventListener("click", function() {
        document.getElementById("containerDadospersonagem").style.visibility = "hidden"
    });
    
    // Impede que um clique dentro do card o feche
    document.getElementById("containerDadospersonagem").addEventListener("click", function(event) {
        event.stopPropagation()
    })
})

// Chama a função para preencher a galeria de personagens ao carregar a página
preencherImagensPersonagens()
