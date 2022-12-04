        //take player input
        document.addEventListener('DOMContentLoaded',function(){
            document.querySelectorAll('button').forEach(function(button){
                button.onclick = function(){
                    let playerSelection = button.value;
                    
                    //get computer choice
                    function getComputerChoice(){
                    const choices = ["rock","paper","scissor"];
                    let randomIndex = Math.floor(Math.random() * choices.length); 
                    var randomChoice = choices[randomIndex];
                    return randomChoice;
                    };
                    //rock paper scissor function
                    function playRound(playerSelection, computerSelection){
                    if (playerSelection==="rock" && computerSelection === "paper"){
                        cptscore();
                        return "You lose! paper beats rock";
                    }
                    else if (playerSelection==="rock" && computerSelection === "rock"){
                        cptscore();
                        yourscore();
                        return "even"
                    }
                    else if (playerSelection==="rock" && computerSelection === "scissor"){
                        yourscore();
                        return "You win! rock beats scissors";
                    }
                    else if (playerSelection==="paper" && computerSelection === "paper"){
                        return "even"
                    }
                    else if (playerSelection==="paper" && computerSelection === "rock"){
                        return "win"
                    }
                    else if (playerSelection==="paper" && computerSelection === "scissor"){
                        return "lose"
                    }
                    else if (playerSelection==="scissor" && computerSelection === "paper"){
                        return "win"
                    }
                    else if (playerSelection==="scissor" && computerSelection === "rock"){
                        return "lose"
                    }
                    else if (playerSelection==="scissor" && computerSelection === "scissor"){

                    const computerSelection = getComputerChoice();
                        return "even"
                    }
    
                    };
                    //stimulate game
                    function game(){
                    const computerSelection = getComputerChoice();
                    document.querySelector('#computer').innerHTML = `${computerSelection}`;
                    document.querySelector('#result').innerHTML = playRound(playerSelection,computerSelection);
                    };
                    game();
                    //count and store the result
                    if(!localStorage.getItem('yourscore')){
                        localStorage.setItem('yourscore',0)
                    }
                    function yourscore(){
                        let yourscore = localStorage.getItem('yourscore');
                        yourscore++;
                        document.querySelector('#yourscore').innerHTML = yourscore;
                        localStorage.setItem('yourscore',yourscore); 
                    }
                    if(!localStorage.getItem('cptscore')){
                        localStorage.setItem('cptscore',0)
                    }
                    function cptscore(){
                        let cptscore = localStorage.getItem('cptscore');
                        cptscore++;
                        document.querySelector('#cptscore').innerHTML = cptscore;
                        localStorage.setItem('cptscore',cptscore); 
                    };
                    
                };
            });
           
        });