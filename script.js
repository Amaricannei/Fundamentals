var intro = "Name please";
var Username = "";
var inputword = "";

var winCounter = 0;
var win = winCounter / 2;

//need to win two games for 1 score, everytime required win counter will not be zero. As soon as you win both games, required to win will go back to 2.
var reqWin = function () {
  var req = "";
  if (win % 2 == 0) {
    return (req = 2);
  } else {
    return (req = win % 2);
  }
};

var randomNo = function () {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  return randomNumber;
};

//generate word based on random number
var wordGenerator = function () {
  var word = "";
  var numberRolled = randomNo();
  console.log("line 18", numberRolled);
  if (numberRolled == 1) {
    return (word = "banana");
  } else if (numberRolled == 2) {
    return (word = "chisel");
  } else if (numberRolled == 3) {
    return (word = "faucet");
  }
};

var main = function (input) {
  if (intro == "Name please") {
    Username = input;
    intro = "Guessing game";
    return "Hi! " + Username;
  } else if (intro == "Guessing game") {
    if (input == 1) {
      inputword = "banana";
    } else if (input == 2) {
      inputword = "chisel";
    } else if (input == 3) {
      inputword = "faucet";
    } else {
      return "Invalid Input";
    }

    var randomWord = wordGenerator();
    console.log("line 54", randomWord);
    console.log("line 55", inputword);

    if (inputword == randomWord) {
      winCounter++;
    }
    reqWin;
  }
  win = Math.floor(winCounter / 2);

  return `<b>${Username} <b/> picked <b>${inputword}<b/>, Secret word is <b>${randomWord}<b/> <br> You have ${win} Win, You need to win ${reqWin()} time`;
};

/*Create a game where a player must correctly guess secret words to win.
The computer chooses a random word from a set of three words. Feel free to use whatever words you'd like, but we will be using the words "banana", "chisel", and "faucet".
To win the game the player must guess correctly twice in total; but is allowed to guess wrongly in between their two correct guesses.
For each guess, output all information such as the guessed word, the secret word, and how many correct guesses the player still needs until she wins.*/
