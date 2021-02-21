// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll('.select img')];

hands.forEach((hand) => {
    hand.addEventListener('click', () => {
        game.playerHand = hand.dataset.option;
        hands.forEach(hand => hand.style.boxShadow = '');
        hand.style.boxShadow = "0 0 20px 5px yellow";
    })
});

//funkcja sterująca 
function startGame(){
        
    if(!game.playerHand){
        return alert('Musisz wybrać dłoń!');
    }
    if(game.playerHand != ''){
        gameSummary.numbers += 1;
        document.querySelector('p.numbers span').textContent = gameSummary.numbers
        game.aiHand = hands[Math.floor(Math.random() * hands.length)].dataset.option;
        hands.forEach(hand => hand.style.boxShadow = '');
    }
    document.querySelector('[data-summary="your-choice"]').textContent = game.playerHand;
    document.querySelector('[data-summary="ai-choice"]').textContent = game.aiHand;
    if(game.playerHand === 'kamień' && game.aiHand === 'nożyczki' || game.playerHand === 'papier' && game.aiHand ==='kamień' || game.playerHand ==='nożyczki' && game.aiHand === 'papier') {
        document.querySelector('div.panel-left h2').textContent = 'WYGRAŁEŚ';
        gameSummary.wins += 1;
        document.querySelector('p.wins span').textContent = gameSummary.wins
    }else if (game.playerHand === game.aiHand){
        document.querySelector('div.panel-left h2').textContent = 'Remis';
        gameSummary.draws += 1;
        document.querySelector('p.draws span').textContent = gameSummary.draws;
    }
    
    else {
        document.querySelector('div.panel-left h2').textContent = 'Przegrałeś : c';
        gameSummary.losses += 1;
        document.querySelector('p.losses span').textContent = gameSummary.losses;
    }
    game.playerHand = '';

}

document.querySelector('.start').addEventListener('click', startGame)