'use strict'
//funções para criação dos cards personagens
function criarCardPersonagem(linkPersonagem){
    const galeriaPersonagens = document.getElementById('galeriapersonagens')
    const novaImagemPersonagem = document.createElement('img')
    novaImagemPersonagem.src = linkPersonagem
    galeriaPersonagens.appendChild(novaImagemPersonagem)

    novaImagemPersonagem.classList.add('imagempersonagem')
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
//personagem através da pesquisa
async function preencherPersonagens(){
    const personagemDigitado = document.getElementById('pesquisarpersonagens').value
    const fotosPersonagem = await pesquisarPersonagens(personagemDigitado)

    const galeriaPersonagens = document.getElementById('galeriapersonagens')
    galeriaPersonagens.replaceChildren('')
    fotosPersonagem.forEach(criarCardPersonagem)
    console.log(fotosPersonagem)
}
//personagem aleatório ao carregar a página
async function carregarPersonagensAleatorios(){
    const url =  "https://potterapi-fedeperin.vercel.app/en/characters/random"
    const response = await fetch(url)
    const data = await response.json()
    const imagensAleatorias = []

    // data.forEach(function(item){
    imagensAleatorias.push(data.image)
    // })

    const galeriaPersonagens = document.getElementById('galeriapersonagens')
    // galeriaPersonagens.replaceChildren('')
    imagensAleatorias.forEach(criarCardPersonagem)

    const nomePersonagem = data.fullName
}
for (let i = 0; i < 10; i++) {
    carregarPersonagensAleatorios()
}
document.getElementById('pesquisar').addEventListener('click', preencherPersonagens)









function criarCardInformacoesPersonagem(data) {
    const containerDadosPersonagem = document.getElementById('ContainerDadospersonagem');
    // containerDadosPersonagem.innerHTML = ''; // Limpa os dados anteriores

    // Criando elementos
    const divImagemDadosPersonagem = document.createElement('div');
    const divDadosPersonagem = document.createElement('div');
    const imagemDadosPersonagem = document.createElement('img');
    const detalhesPersonagem = document.createElement('div');

    // Adicionando imagem
    imagemDadosPersonagem.src = data.image;

    // Criando os textos das informações
    const nomePersonagem = document.createElement('p');
    nomePersonagem.textContent = `Nome: ${data.fullname}`;

    const apelidoPersonagem = document.createElement('p');
    apelidoPersonagem.textContent = `Apelido: ${data.nickname}`;

    const casaPersonagem = document.createElement('p');
    casaPersonagem.textContent = `Casa: ${data.hogwartsHouse}`;

    const atorPersonagem = document.createElement('p');
    atorPersonagem.textContent = `Ator: ${data.interpretedBy}`;

    const dataNascimentoPersonagem = document.createElement('p');
    dataNascimentoPersonagem.textContent = `Data de nascimento: ${data.birthdate}`;

    // Criando botão de fechar
    // const botaoFechar = document.createElement('button');
    // botaoFechar.textContent = '✖';
    // botaoFechar.classList.add('fechar-detalhes');
    // botaoFechar.addEventListener('click', () => {
    //     containerDadosPersonagem.classList.add('oculto');
    // });

    // Adicionando classes para estilização
    divImagemDadosPersonagem.classList.add('divImagemDadosPersonagem');
    divDadosPersonagem.classList.add('divDadosPersonagem');
    imagemDadosPersonagem.classList.add('imagemDadosPersonagem');

    // Adicionando elementos às divs
    divImagemDadosPersonagem.appendChild(imagemDadosPersonagem);
    divDadosPersonagem.appendChild(nomePersonagem);
    divDadosPersonagem.appendChild(apelidoPersonagem);
    divDadosPersonagem.appendChild(casaPersonagem);
    divDadosPersonagem.appendChild(atorPersonagem);
    divDadosPersonagem.appendChild(dataNascimentoPersonagem);

    // Adicionando tudo ao container principal
    detalhesPersonagem.appendChild(botaoFechar);
    detalhesPersonagem.appendChild(divImagemDadosPersonagem);
    detalhesPersonagem.appendChild(divDadosPersonagem);
    
    containerDadosPersonagem.appendChild(detalhesPersonagem);
    // containerDadosPersonagem.classList.remove('oculto'); // Torna a div visível
}








function criarCardPersonagem(linkPersonagem, dataPersonagem) {
    const galeriaPersonagens = document.getElementById('galeriapersonagens');
    const novaImagemPersonagem = document.createElement('img');

    novaImagemPersonagem.src = linkPersonagem;
    novaImagemPersonagem.classList.add('imagempersonagem');

    // Adiciona evento de clique para exibir os detalhes do personagem
    novaImagemPersonagem.addEventListener('click', () => {
        criarCardInformacoesPersonagem(dataPersonagem);
    });

    galeriaPersonagens.appendChild(novaImagemPersonagem);
}




