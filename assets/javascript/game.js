
// delay execution
$(document).ready(function() {

  // global variables
  var currentScore = 0;
  var targetScore;
  var wins = 0;
  var losses = 0;
  var crystals;
  // >>>

  // create rupees object
  crystals = {

    red: {
      amount: 0,
      url: "assets/images/red.gif"
    },

    blue: {
      amount: 0,
      url: "assets/images/blue.gif"
    },

    green: {
      amount: 0,
      url: "assets/images/green.gif"
    },

    yellow: {
      amount: 0,
      url:"assets/images/yellow.png"
    }
  };
  // >>>

  // create random number generator
  function numGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // >>>

  // initial setup and game reset
  function setup() {

    // reset player score
    currentScore = 0;

    // generate crystal values
    crystals.red.amount = numGen(1, 12);
    crystals.blue.amount = numGen(1, 12);
    crystals.green.amount = numGen(1, 12);
    crystals.yellow.amount = numGen(1, 12);

    // generate target score
    targetScore = numGen(19, 120);

    // append player current score
    $("#current-score").text(currentScore);
    
    // append new target score
    $("#target-score").text(targetScore);

    // test
    console.log("Target Score is : " + targetScore);
    console.log("Red : " + crystals.red.amount);
    console.log("Blue : " + crystals.blue.amount);
    console.log("Green : " + crystals.green.amount);
    console.log("Yellow : " + crystals.yellow.amount);
  }
  // >>>

  // check for win or loss
  function winOrLose() {
    if (currentScore > targetScore) {

      // alert user
      alert("Sorry, You Lose!");

      // test
      console.log("Loss");

      // add to losses
      losses++;

      // append loss count
      $("#loss-count").text(losses);

      // reset game
      setup();

    } else if (currentScore === targetScore) {

      // alert user
      alert("You Win!!!");

      // test
      console.log("Win");

      // add to wins
      wins++;

      // append win count
      $("#win-count").text(wins);

      // reset game
      setup();

    }
  }

  // crystal click response
  function addToScore(crystalClick) {

    // add to current score
    currentScore += crystalClick.amount;

    // append current score
    $("#current-score").text(currentScore);

    // check for win or loss
    winOrLose();

    console.log("Current score is : " + currentScore);
  }

  // initialize game
  setup();

  // on click events
  $("#red").click(function() {
    addToScore(crystals.red);
  });

  $("#blue").click(function() {
    addToScore(crystals.blue);
  });

  $("#green").click(function() {
    addToScore(crystals.green);
  });

  $("#yellow").click(function() {
    addToScore(crystals.yellow);
  });

});