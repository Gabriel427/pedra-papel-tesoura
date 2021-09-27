var playerChoise = 0;
        var cpuChoise = 0;
        var playerScore = 0;
        var cpuScore = 0 ;
        winner = -1;

        function select(option){
            playerChoise = option;
            cpuChoise = Math.floor((Math.random() * (3 - 1 + 1))) + 1;
            //1-paper
            //2-scissors
            //3-rock
            if((playerChoise == 1) && (cpuChoise == 1)) {
                ganhador = 0;
            }
            else if((playerChoise == 1) && (cpuChoise == 2)) {
                ganhador = 2;
                cpuScore++;
            }
            else if((playerChoise == 1) && (cpuChoise == 3)) {
                ganhador = 1;
                playerScore++;
            }
            else if((playerChoise == 2) && (cpuChoise == 1)) {
                ganhador = 1;
                playerScore++;
            }
            else if((playerChoise == 2) && (cpuChoise == 2)) {
                ganhador = 0;
            }
            else if((playerChoise == 2) && (cpuChoise == 3)) {
                ganhador = 2;
                cpuScore++;
            }
            else if((playerChoise == 3) && (cpuChoise == 1)) {
                ganhador = 2;
                cpuScore++;
            }
            else if((playerChoise == 3) && (cpuChoise == 2)) {
                ganhador = 1;
                playerScore++;
            }
            else if((playerChoise == 3) && (cpuChoise == 3)) {
                ganhador = 0;
            } 
            
            document.getElementById("player-choise-1").classList.remove('selected')
            document.getElementById("player-choise-2").classList.remove('selected')
            document.getElementById("player-choise-3").classList.remove('selected')
            document.getElementById("cpu-choise-1").classList.remove('selected')
            document.getElementById("cpu-choise-2").classList.remove('selected')
            document.getElementById("cpu-choise-3").classList.remove('selected')

            //inserction the the selected class
            document.getElementById("player-choise-"+ playerChoise).classList.add('selected')
            document.getElementById("cpu-choise-"+ cpuChoise).classList.add('selected')

            if (ganhador == 0) {
                document.getElementById("messages").innerHTML = 'Draw'
            }
            else if (ganhador == 1) {
                document.getElementById("messages").innerHTML = 'Gabriel Win'
                document.getElementById("player-score").innerHTML = playerScore;
            }
            else if (ganhador == 2) {
                document.getElementById("messages").innerHTML = 'Cpu Win'
                document.getElementById("cpu-score").innerHTML = cpuScore;
            }
           
            
        }