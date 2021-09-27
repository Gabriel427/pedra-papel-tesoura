let playerChoise = 0;
let cpuChoise = 0;
let playerScore = 0;
let cpuScore = 0 ;
let winner = -1;

function logic(option){
    playerChoise = option;
    cpuChoise = Math.floor((Math.random() * 3)+1);
    //1-paper
    //2-scissors
    //3-rock
    if((playerChoise == 1) && (cpuChoise == 1)) {
        win = 0;
    }
    else if((playerChoise == 1) && (cpuChoise == 2)) {
        win = 2;
        cpuScore++;
    }
    else if((playerChoise == 1) && (cpuChoise == 3)) {
        win = 1;
        playerScore++;
    }
    else if((playerChoise == 2) && (cpuChoise == 1)) {
        win = 1;
        playerScore++;
    }
    else if((playerChoise == 2) && (cpuChoise == 2)) {
        win = 0;
    }
    else if((playerChoise == 2) && (cpuChoise == 3)) {
        win = 2;
        cpuScore++;
    }
    else if((playerChoise == 3) && (cpuChoise == 1)) {
        win = 2;
        cpuScore++;
    }
    else if((playerChoise == 3) && (cpuChoise == 2)) {
        win = 1;
        playerScore++;
    }
    else if((playerChoise == 3) && (cpuChoise == 3)) {
        win = 0;
    }
    return win;
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
        document.getElementById("messages").innerHTML = 'Gabriel Win'
        document.getElementById("player-score").innerHTML = playerScore;
    }
    else if (winner == 2) {
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