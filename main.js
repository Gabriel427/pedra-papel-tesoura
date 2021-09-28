let gameChoise = document.getElementsByClassName('gamechoise')
let playerChoise = 0;
let cpuChoise = 0;
let playerScore = 0;
let cpuScore = 0 ;
let winner = -1;
let win = -1;

for(let i = 0; i < gameChoise.length; i++){
    gameChoise[i].addEventListener('click', function(treco){
    let tempId = treco.target.parentNode.id;
    playerChoise = tempId.split('-')[2];
    startGame(playerChoise);
    }
    )
}

function logic(option){
    playerChoise = option;
    cpuChoise = Math.floor((Math.random() * 3)+1);
    
    if(playerChoise == cpuChoise){
        return 0;
    }
    else if((playerChoise == 1) && (cpuChoise == 3)) {
        return 1;
    }
    else if((playerChoise == 2) && (cpuChoise == 1)) {
        return 1;
    }
    else if((playerChoise == 3) && (cpuChoise == 2)) {
        return 1;
    }
    else
        return 2;
    }

function cleanSelected(){
    document.getElementById("player-choise-1").classList.remove('selected')
    document.getElementById("player-choise-2").classList.remove('selected')
    document.getElementById("player-choise-3").classList.remove('selected')
    document.getElementById("cpu-choise-1").classList.remove('selected')
    document.getElementById("cpu-choise-2").classList.remove('selected')
    document.getElementById("cpu-choise-3").classList.remove('selected')
}

function insertSelected(){
    document.getElementById("player-choise-"+ playerChoise).classList.add('selected')
    document.getElementById("cpu-choise-"+ cpuChoise).classList.add('selected')
}

function displayWinner(){
    if (winner == 0) {
        document.getElementById("messages").innerHTML = 'Draw'
    }
    else if (winner == 1) {
        playerScore++;
        document.getElementById("messages").innerHTML = 'Gabriel Win'
        document.getElementById("player-score").innerHTML = playerScore;
    }
    else if (winner == 2) {
        cpuScore++;
        document.getElementById("messages").innerHTML = 'Cpu Win'
        document.getElementById("cpu-score").innerHTML = cpuScore;
    }
}

function startGame(option){
    winner = logic(option);
    cleanSelected();
    insertSelected();
    displayWinner(winner);
}