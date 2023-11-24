var gamemode = "intro";
// game default start in intro mode for inputting name, can be changed into 'Real Game Mode' &'prank mode'.

var PlayerName = "";

var totalgamePlayed = 0;
var winS = 0;
var losseS = 0;
var tie = 0;

//var myOutputValue = "";

function random() {
  var random = Math.floor(Math.random() * 3) + 1;
  var result = "";
  if (random == 1) {
    result = "stone";
  } else if (random == 2) {
    result = "paper";
  } else if (random == 3) {
    result = "scissor";
  }
  return result;
}

var main = function (input) {
  if (gamemode == "intro") {
    PlayerName = input;
    gamemode = "Real Game";
    return "YalamBBBa!! " + PlayerName;
  } else if (gamemode == "Real Game") {
    var userInput = input.toLowerCase();
    var computer = random();

    if (userInput == "r") {
      gamemode = "Real Game";
      return `Game mode switched to <b>${gamemode}<b/>`;
    } else if (userInput == "p") {
      gamemode = "Prank";
      return `Game mode switched to <b>${gamemode}<b/>`;
    }

    console.log("Computer", computer);
    console.log("Player", userInput);

    if (gamemode == "Real Game") {
      if (userInput == computer) {
        totalgamePlayed++;
        tie++;
        var output1 = "";
        if (computer == "stone") {
          output1 = "stone 🥌";
        } else if (computer == "paper") {
          output1 = "paper 🗒";
        } else {
          output1 = "scissor ✂️";
        }
        console.log("Tie is working");
        myOutputValue = `<b>Its a Tie!! <br> Computer ${output1} You ${output1}`;
      } else if (userInput == "paper" && computer == "scissor") {
        totalgamePlayed++;
        myOutputValue = `You lose! <br> Computer ✂️ ${computer.toUpperCase()} You 🗒 ${userInput.toUpperCase()}`;
        losseS++;
      } else if (computer == "paper" && userInput == "scissor") {
        totalgamePlayed++;
        winS++;
        myOutputValue = `You Win! <br> Computer 🗒 ${computer.toUpperCase()} You ✂️ ${userInput.toUpperCase()}`;
      } else if (computer == "stone" && userInput == "scissor") {
        totalgamePlayed++;
        myOutputValue = `You lose! <br> Computer 🥌 ${computer.toUpperCase()} You ✂️ ${userInput.toUpperCase()}`;
        losseS++;
      } else if (computer == "scissor" && userInput == "stone") {
        totalgamePlayed++;
        winS++;
        myOutputValue = `You Win! <br> Computer ✂️${computer.toUpperCase()} You 🥌 ${userInput.toUpperCase()}`;
      } else if (computer == "stone" && userInput == "paper") {
        totalgamePlayed++;
        winS++;
        myOutputValue = `You Win! <br> Computer 🥌 ${computer.toUpperCase()} You 🗒 ${userInput.toUpperCase()}`;
      } else if (computer == "paper" && userInput == "stone") {
        totalgamePlayed++;
        losseS++;
        myOutputValue = `You lose! <br> Computer 🗒 ${computer.toUpperCase()} You 🥌 ${userInput.toUpperCase()}`;
      } else {
        return "Type any one (Paper or Scissor, Stone)";
      }
      return `<b>${gamemode} <br>${myOutputValue} <br> Game Played: ${totalgamePlayed} *Wins: ${winS} *Tie: ${tie} *Loss: ${losseS}`;
    }
  }

  if (gamemode == "Prank") {
    if (computer == userInput) {
      totalgamePlayed++;
      tie++;
      var output2 = "";
      if (computer == "stone") {
        output2 = "stone 🥌";
      } else if (computer == "paper") {
        output2 = "paper 🗒";
      } else {
        output2 = "scissor ✂️";
      }
      console.log("Prank Tie is working");
      myOutputValue = `<b>Its a Tie!! <br> Computer ${output2} You ${output2}`;
    } else if (computer == "scissor" && userInput == "stone") {
      totalgamePlayed++;
      myOutputValue = `You lose! <br> Computer ✂️ ${computer.toUpperCase()} You 🥌 ${userInput.toUpperCase()}`;
      losseS++;
    } else if (computer == "paper" && userInput == "stone") {
      totalgamePlayed++;
      winS++;
      myOutputValue = `You Win! <br> Computer 🗒 ${computer.toUpperCase()} You 🥌 ${userInput.toUpperCase()}`;
    } else if (computer == "stone" && userInput == "paper") {
      totalgamePlayed++;
      myOutputValue = `You lose! <br> Computer 🥌 ${computer.toUpperCase()} You 🗒 ${userInput.toUpperCase()}`;
      losseS++;
    } else if (computer == "scissor" && userInput == "paper") {
      totalgamePlayed++;
      winS++;
      myOutputValue = `You Win! <br> Computer ✂️${computer.toUpperCase()} You 🗒 ${userInput.toUpperCase()}`;
    } else if (computer == "stone" && userInput == "scissor") {
      totalgamePlayed++;
      winS++;
      myOutputValue = `You Win! <br> Computer 🥌 ${computer.toUpperCase()} You ✂️ ${userInput.toUpperCase()}`;
    } else if (computer == "paper" && userInput == "scissor") {
      totalgamePlayed++;
      losseS++;
      myOutputValue = `You lose! <br> Computer 🗒 ${computer.toUpperCase()} You ✂️ ${userInput.toUpperCase()}`;
    } else {
      return "Type any one (Paper or Scissor, Stone)";
    }
    return `<b>${gamemode} <br>${myOutputValue} <br> Game Played: ${totalgamePlayed} *Wins: ${winS} *Tie: ${tie} *Loss: ${losseS}`;
  }
};
//working
