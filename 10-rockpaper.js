
let score = JSON.parse(localStorage.getItem("message")) || {
  lose: 0,
  win: 0,
  draw: 0,
};
let noni="";
let noni2="";
let result = "";
let computerMove = "";
function checker(a) {
  const randomNumber = Math.random();
  console.log(randomNumber);
  if (randomNumber < 1 / 3) computerMove = "rock";
  else if (randomNumber < 2 / 3) computerMove = "paper";
  else computerMove = "scissor";
  if (a === "rock") {
    if (computerMove === "rock") result = "draw";
    else if (computerMove === "paper") result = "lose";
    else result = "win";
  }
  if (a === "paper") {
    if (computerMove === "rock") result = "win";
    else if (computerMove === "paper") result = "draw";
    else result = "lose";
  }
  if (a === "scissor") {
    if (computerMove === "rock") result = "lose";
    else if (computerMove === "paper") result = "win";
    else result = "draw";
  }
  if (result === "lose") {
    score.lose++;
  } else if (result === "win") {
    score.win++;
  } else {
    score.draw++;
  };
  if(a==='rock') noni='a9';
  if(a==='paper') noni='a9_1';
  if(a==='scissor') noni='a9_2';
  if(computerMove==='rock') noni2='a9';
  if(computerMove==='paper') noni2='a9_1';
  if(computerMove==='scissor') noni2='a9_2';

  localStorage.setItem("message", JSON.stringify(score));
  const begin = document.querySelector(".begin");
  const mid = document.querySelector(".mid");
  const final = document.querySelector(".final");
  begin.innerHTML = `You ${result}`;
  mid.innerHTML = `You  <img src="Image/${noni}.jpg" class="loli" /><img src="Image/${noni2}.jpg" class="loli" /> Computer`;
  final.innerHTML = `Wins: ${score.win}, Loses: ${score.lose}, Draw: ${score.draw}`;
}
