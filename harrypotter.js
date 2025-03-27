'use strict'
// //funções para criação dos cards personagens
// function criarCardPersonagem(linkPersonagem){
//     const galeriaPersonagens = document.getElementById('galeriapersonagens')
//     const novaImagemPersonagem = document.createElement('img')
//     novaImagemPersonagem.src = linkPersonagem.image
//     // novaImagemPersonagem.onclick = () =>
//     galeriaPersonagens.appendChild(novaImagemPersonagem)

//     novaImagemPersonagem.classList.add('imagempersonagem')
// }

// async function pesquisarPersonagens(personagem){
//     const url = `https://potterapi-fedeperin.vercel.app/en/characters?search=${personagem}`
//     const response = await fetch(url)
//     const data = await response.json()
    
//     const arrayDadosPersonagem = []

//     data.forEach(function(item){
//         arrayDadosPersonagem.push(item)
//     })


//     return arrayDadosPersonagem
// }
// //personagem através da pesquisa
// async function preencherPersonagens(){
//     const personagemDigitado = document.getElementById('pesquisarpersonagens').value
//     const fotosPersonagem = await pesquisarPersonagens(personagemDigitado)

//     const galeriaPersonagens = document.getElementById('galeriapersonagens')
//     galeriaPersonagens.replaceChildren('')
//     fotosPersonagem.forEach(criarCardPersonagem)
// }
// //personagem aleatório ao carregar a página
// async function carregarPersonagensAleatorios(){
//     const url =  "https://potterapi-fedeperin.vercel.app/en/characters/random"
//     const response = await fetch(url)
//     const data = await response.json()
//     const arrayDadosPersonagemAleatorio = []

//     // data.forEach(function(item){
//         arrayDadosPersonagemAleatorio.push(data)
        
//     // })

//     const galeriaPersonagens = document.getElementById('galeriapersonagens')
//     // galeriaPersonagens.replaceChildren('')
//     arrayDadosPersonagemAleatorio.forEach(criarCardPersonagem)

//     // const nomePersonagem = data.fullName
// }
// for (let i = 0; i < 10; i++) {
//     carregarPersonagensAleatorios()
// }
// document.getElementById('pesquisar').addEventListener('click', preencherPersonagens)


// //criar card de informações sobre a casa ao passar o mouse
// // function criarCardCasas(linkCasa){
// //     const containerInformacoesCasa = document.getElementById('informacoes')
// //     const divInformacoesCasa = document.createElement('div')
// //     const nomeCasa = document.createElement('p')
// //     const emojiCasa = document.createElement('p')
// //     const fundadorCasa = document.createElement('p')
// //     const coresCasa = document.createElement('p')
// //     const Casa = document.createElement('p')
// // }


// document.getElementById('personagens')



async function dadosApiTodosOsPersonagens(){
    const url = `https://potterapi-fedeperin.vercel.app/en/characters`
    const response = await fetch(url)
    const data = await response.json()

    
    return data
}

async function criarCardsPersonagens(){
    const dados = await dadosApiTodosOsPersonagens()

    const galeriaPersonagens = document.getElementById('galeriapersonagens')
    
    
    dados.forEach(function(item){
        const novaImagemPersonagem = document.createElement('img')
        novaImagemPersonagem.classList.add('imagempersonagem')
        novaImagemPersonagem.src = item.image
        novaImagemPersonagem.classList.add('procurar_personagem')
        

        galeriaPersonagens.appendChild(novaImagemPersonagem)
    })
    
}

async function dadosPersonagemProcurado(id){
    const url = `https://potterapi-fedeperin.vercel.app/en/characters?search=${id}`
    const response = await fetch(url)

    const data = await response.json()

    return data
}


async function criarCardPersonagem(){
    const containerDados = document.getElementById('containerDadospersonagem')
    const dados = await dadosPersonagemProcurado()
}


document.addEventListener('click',function(event){
    if(event.target.classList.contains('procurar_personagem')){

    }
})





document.addEventListener("DOMContentLoaded",function(){
    const bodyId = document.body.id

    if(bodyId == "personagens"){
        criarCardsPersonagens()
    }

})


