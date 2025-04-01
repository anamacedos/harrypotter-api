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
     galeriaPersonagens.replaceChildren('')
     fotosPersonagem.forEach(criarCardPersonagem)
     console.log(fotosPersonagem)
 }
 

 async function carregarPersonagensAleatorios(){
    const url =  "https://potterapi-fedeperin.vercel.app/en/characters/random"
    const response = await fetch(url)
    const data = await response.json()
    const arrayDadosPersonagemAleatorio = []

     data.forEach(function(item){
        arrayDadosPersonagemAleatorio.push(data)
     })

    const galeriaPersonagens = document.getElementById('galeriapersonagens')
    // galeriaPersonagens.replaceChildren('')
    arrayDadosPersonagemAleatorio.forEach(criarCardPersonagem)

}
for (let i = 0; i < 10; i++) {
    carregarPersonagensAleatorios()
}
 document.getElementById('pesquisar').addEventListener('click', preencherPersonagens)
 carregarPersonagensAleatorios()








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



//projeto ph 
const searchInput = document.querySelector("#search-input");

const uniqueDrivers = new Set();  // Agora armazenará objetos completos de pilotos
const cardContainer = document.getElementById("card-container");

// Função para buscar os dados da API
fetch("https://api.openf1.org/v1/drivers")
    .then((response) => response.json())
    .then((data) => {
        // Chama a função para gerar os cards
        generateCards(data);
    })
    .catch((error) => console.log("Erro ao buscar dados: ", error));

// Função para gerar os cards
function generateCards(drivers) {
    // Filtra pilotos únicos com base no nome
    const uniqueDriversList = drivers.filter(driver => {
        // Verifica se o piloto já foi adicionado com base no nome completo
        if ([...uniqueDrivers].some(existingDriver => existingDriver.full_name === driver.full_name)) {
            return false;
        }
        // Adiciona o piloto completo ao Set
        uniqueDrivers.add(driver);
        return true;
    });

    // Exibe todos os cards ao carregar os dados
    uniqueDriversList.forEach((driver) => {
        const card = createCard(driver);
        cardContainer.appendChild(card);
    });
}

// Cria um card individual para o piloto
function createCard(driver) {
    const card = document.createElement("div");
    card.classList.add("card");

    // Cria a frente do card
    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");

    const img = document.createElement("img");
    img.src = driver.headshot_url;
    img.alt = driver.full_name;
    img.classList.add("card-image");

    cardFront.appendChild(img);

    // Cria o verso do card
    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");

    const h2 = document.createElement("h2");
    h2.textContent = driver.full_name;
    cardBack.appendChild(h2);

    const team = document.createElement("p");
    team.textContent = `Equipe: ${driver.team_name}`;
    cardBack.appendChild(team);

    const country = document.createElement("p");
    country.textContent = `País: ${driver.country_code}`;
    cardBack.appendChild(country);

    const number = document.createElement("p");
    number.textContent = `Número: ${driver.driver_number}`;
    cardBack.appendChild(number);

    // Adiciona a frente e o verso no card
    card.appendChild(cardFront);
    card.appendChild(cardBack);

    // Adiciona um evento de clique para abrir a modal
    card.addEventListener("click", () => {
        openModal(driver);
    });

    return card;
}

// Função para abrir a modal
function openModal(driver) {
    const modal = document.getElementById("modal");
    const modalName = document.getElementById("modal-name");
    const modalImage = document.getElementById("modal-image");
    const modalTeam = document.getElementById("modal-team");
    const modalCountry = document.getElementById("modal-country");
    const modalNumber = document.getElementById("modal-number");
    const modalDescription = document.getElementById("modal-description");

    modalName.textContent = driver.full_name;
    modalImage.src = driver.headshot_url;
    modalTeam.textContent = `Equipe: ${driver.team_name}`;
    modalCountry.textContent = `País: ${driver.country_code}`;
    modalNumber.textContent = `Número: ${driver.driver_number}`;
    modalDescription.textContent = `Descrição: Este piloto é um dos melhores da Fórmula 1, com grandes conquistas e uma trajetória impressionante.`;

    modal.style.display = "block";
}

// Função para fechar a modal
const closeModal = document.getElementById("close-btn");
closeModal.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
});

// Fechar a modal quando clicar fora da modal
window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Filtro de pesquisa
searchInput.addEventListener("keypress", (event) => {
    const searchTerm = event.target.value.toLowerCase();

    // Filtra a lista de pilotos com base no nome da equipe
    const filteredDrivers = [...uniqueDrivers].filter(driver => {
        // Verifica se team_name existe e realiza a busca insensível a maiúsculas/minúsculas
        const teamName = driver.team_name || ''; // Se team_name for nulo ou indefinido, substitui por uma string vazia
        return teamName.toLowerCase().includes(searchTerm);
    });
    
    // Limpa os cards exibidos antes de exibir os filtrados
    cardContainer.innerHTML = '';
    
    // Exibe os cards filtrados
    filteredDrivers.forEach((driver) => {
        const card = createCard(driver);
        cardContainer.appendChild(card);
    });
});



