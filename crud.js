// Array para armazenar os jogadores
let players = [];

// Função para renderizar a lista de jogadores
const renderPlayers = () => {
    const playerTableBody = document.querySelector('#player-table tbody');
    playerTableBody.innerHTML = ''; // Limpa o conteúdo anterior

    players.forEach((player, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${player.name}</td>
            <td>
                <button class="edit" onclick="editPlayer(${index})">Editar</button>
                <button class="delete" onclick="deletePlayer(${index})">Deletar</button>
            </td>
        `;
        playerTableBody.appendChild(row);
    });
};

// Função para adicionar um novo jogador
const addPlayer = (name) => {
    players.push({ name });
    renderPlayers();
    savePlayers();
};

// Função para editar um jogador
const editPlayer = (index) => {
    const newName = prompt("Digite o novo nome do jogador:", players[index].name);
    if (newName) {
        players[index].name = newName;
        renderPlayers();
        savePlayers();
    }
};

// Função para deletar um jogador
const deletePlayer = (index) => {
    players.splice(index, 1);
    renderPlayers();
    savePlayers();
};

// Função para salvar os jogadores no LocalStorage
const savePlayers = () => {
    localStorage.setItem('players', JSON.stringify(players));
};

// Função para carregar os jogadores do LocalStorage
const loadPlayers = () => {
    const storedPlayers = localStorage.getItem('players');
    if (storedPlayers) {
        players = JSON.parse(storedPlayers);
        renderPlayers();
    }
};

// Evento para adicionar um jogador ao enviar o formulário
document.querySelector('#player-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const playerName = document.querySelector('#player-name').value;
    if (playerName) {
        addPlayer(playerName);
        document.querySelector('#player-name').value = ''; // Limpa o campo de nome
    }
});

// Carregar os jogadores ao iniciar a página
loadPlayers();
