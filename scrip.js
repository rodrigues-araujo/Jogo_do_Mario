document.addEventListener('DOMContentLoaded', () => { 

    const mario = document.querySelector('.mario'); 
    const pipe = document.querySelector('.pipe'); 
    const gameOverScreen = document.querySelector('.game-over'); 
    const restartButton = document.querySelector('#restart-button'); 
    const pointsDisplay = document.querySelector('#points');

    // Variável para armazenar a pontuação
    let points = 0;              
    const jump = () => {
        // Função que adiciona a classe "jump" ao Mario para fazê-lo pular.

        mario.classList.add('jump');   // Adiciona a classe 'jump' que ativa a animação de pulo.
        setTimeout(() => {
            mario.classList.remove('jump');  // Remove a classe 'jump' após 500ms para que o Mario possa pular novamente.
        }, 500); 
        //(500 milissegundos).
    };

    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft; 
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); 

        // Verifica a colisão
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

            pipe.style.animation = 'none';                   // Para a animação do cano
            pipe.style.left = `${pipePosition}px`;

            // Para a animação do Mario
            mario.style.animation = 'none'; 
            mario.style.bottom = `${marioPosition}px`; 
            mario.src = '/imagen/game-over.png'; 
            mario.style.width = '75px'; 
            mario.style.marginLeft = '50px'; 

            gameOverScreen.style.display = 'block';

            clearInterval(loop); 
        if (pipePosition < 0 && !pipe.classList.contains('passed')) {
            points++; 
            pointsDisplay.textContent = points; // Atualiza a pontuação na tela
            pipe.classList.add('passed'); // Marca o cano como "passado"
        }
        if (pipePosition < -80) {
            pipe.classList.remove('passed'); // Prepara o próximo cano para contar pontos
        }
        }
    }, 10); 
    document.addEventListener('keydown', jump);
    restartButton.addEventListener('click', () => {
        location.reload(); 
        // Recarrega a página, reiniciando o jogo completamente.
    });
});
