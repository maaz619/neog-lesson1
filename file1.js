var readfileSync = require("readline-sync");

var userScore = 0;

var userName = readfileSync.question("whats you name?");

console.log("Welcome to Do You Know Me Quiz!!" + " " + userName); //string concatenation

var userAnswer = readfileSync.question("where do i study?");

var finalAnswer = userAnswer.toLowerCase();

// conditional operation or branching
if (finalAnswer === "kolkata") {
  console.log("Magestic!!");
  userScore += 1;
} else {
  console.log("eeeeeeeee!!!!");
}

var userHometown = readfileSync.question("where is my hometown?");

if (userHometown === "koderma") {
  userScore += 1;
  console.log("Final score=" + userScore);
} else {
  userScore -= 1;
  console.log("Final score=" + userScore);
}
