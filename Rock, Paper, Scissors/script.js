// let userScore = 0;
// let compScore = 0;

// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");

// const userScorePa = document.querySelector("#userScore")
// const compScorePa = document.querySelector("#compScore")


// const genCompChoice = () => {
//     // // rock, paper, scissors
//     const option = ['rock', 'paper', 'scissors'];
//     const randIdx = Math.floor(Math.random() * 3); // floor is used to remove decimal
//     return option[randIdx];
// } 

// const drawGame = () =>{
//     console.log("Its a draw");
//     msg.innerText = "Its a draw!! Play Again";
//     msg.style.backgroundColor = "grey";

// }

// const showWinner = (userWin) => {
//     if(userWin) {
//         userScore++;
//         userScorePa.innerText = userScore;
//         msg.innerText = `You win!! Your ${userScore} beats ${compChoice}`;
//         msg.style.backgroundColor = "green";
//     }
//     else{
//         compScore++;
//         compScorePa.innerText = userScore;
//         msg.innerText = `You lose!! Your ${userScore} beats by computer choice ${compChoice}`;
//         msg.style.backgroundColor = "red";

//     }
// }
// const playGame =(userChoice) => {
//     console.log("user choice= ", userChoice);

//     //generate computer choice
//     const compChoice = genCompChoice();
//     console.log("computer choice= ", compChoice);

//     if (userChoice === compChoice){
//         drawGame();
//     }else {
//         let userWin = true;
//         if (userChoice === "rock"){
//             // // scissors, paper
//             userWin = compChoice === "paper" ? false : true;
//         }
//         else if( userChoice === "paper"){
//             // // rock, scissors
//             userWin = compChoice === "scissors" ? false : true;
//         }
//         else {
//             // //rock, paper
//             compChoice == "rock" ? false : true;
//         }

//         showWinner(userWin);
//     }
// }

// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         const userChoice = choice.getAttribute("Id")
//         playGame(userChoice)
//     })   
// })


let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePa = document.querySelector("#userScore");
const compScorePa = document.querySelector("#compScore");

const genCompChoice = () => {
    const option = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}; 

const drawGame = () =>{
    console.log("Its a draw");
    msg.innerText = "Its a draw!! Play Again";
    msg.style.backgroundColor = "grey";
};

const showWinner = (userWin, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePa.innerText = userScore;
        msg.innerText = `You win!! Your ${userWin} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePa.innerText = compScore;
        msg.innerText = `You lose!! Your ${userWin} beats by computer choice ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame =(userChoice) => {
    console.log("user choice= ", userChoice);

    const compChoice = genCompChoice();
    console.log("computer choice= ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
