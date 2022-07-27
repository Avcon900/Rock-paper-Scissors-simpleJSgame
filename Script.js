
function getComputerChoice(){
    num = Math.random();
    if (num<= 0.3){
        return "Rock";
    }
    else if(num > 0.3 && num<= 0.6){
        return "Paper";
    }
    else if ( num> 0.6 && num<= 1){
        return "Scissors";
    }
    else { alert("Unknown error detected."); }
}


function playRound(playerSelection) {
    let ComputerSelection = getComputerChoice();
    console.log(ComputerSelection);
    let PS = playerSelection.toUpperCase();
    let CS = ComputerSelection.toUpperCase();
    if (PS===CS){
        return "Tie match, the most disappointing outcome.";
    }

    else if (
    (PS==="ROCK" && CS === "SCISSORS" ) 
    || (PS === "SCISSORS" && CS === "PAPER") 
    || (PS === "PAPER" && CS === "ROCK")
    ){
        return `You win`;
    }
    else {
        return "You have lost this round, but its alright try again."
    }

}


//console.log(playRound(playerSelection,ComputerSelection));
function game(){
    let Ppoints=0, Cpoints=0;
    for ( let i =0; i<5; i++){
        let playerSelection = prompt("Enter your weapon from Rock , Paper or Scissors: ");
        
        result = playRound(playerSelection);
        if (result==="You have lost this round, but its alright try again."){
            Cpoints++;
            console.log(`Score = ${Ppoints} : ${Cpoints}`);
        }
        else if (result===`You win`){
            Ppoints++;
            console.log(`Score = ${Ppoints} : ${Cpoints}`);
        }
        else{
            continue;
        }
        
    }
    (Ppoints>Cpoints) ? console.log("You win the whole game yay") :
    (Ppoints<Cpoints) ? console.log("You lost the whole game but its okay. No one expected you to win.") :
    console.log("Tie game, lmao");

}
game();