let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const botScorePara = document.querySelector("#bot-score");


const genBotChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options [randomidx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,botChoice) => {
    if(userWin) {
       userScore++;
       userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${botChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        botScore++;
       botScorePara.innerText = botScore;
        msg.innerText = `You lose. ${botChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    const botChoice = genBotChoice();
    console.log("bot choice = ", botChoice);

    if(userChoice === botChoice) {
        drawGame();
} else {
    let userWin = true;
    if (userChoice === "rock") {
        // rock vs paper, rock vs scissors
        userWin = botChoice === "paper" ? false : true; // paper beats rock
    } else if (userChoice === "paper") {
        // paper vs rock, paper vs scissors
        userWin = botChoice === "scissors" ? false : true; // scissors beats paper
    } else {
        // scissors vs rock, scissors vs paper
        userWin = botChoice === "rock" ? false : true; // rock beats scissors
    }
    showWinner(userWin,userChoice,botChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
});
});