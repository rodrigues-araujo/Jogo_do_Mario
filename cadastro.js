const form = document.getElementById('player-registration');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const playerName = document.getElementById('player-name').value;

            if (playerName) {
                localStorage.setItem('playerName', playerName); // Salva o nome do jogador
                window.location.href = 'index.html'; // Redireciona para o jogo
            }
        });