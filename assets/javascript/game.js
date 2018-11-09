
// Delay Execution
$(document).ready(function() {

  // global variables<<<
  let currentScore = 0;
  let targetNum = numGen();
  let wins = 0;
  let losses = 0
  let crystals;
  // >>>

  // crystal object generator
  function crystalNums() {
    
    return {

      red: {
        amount: Math.floor(Math.random() * 12) + 1,
        url: 'assets/images/red.gif'
      },

      blue: {
        amount: Math.floor(Math.random() * 12) + 1,
        url: 'assets/images/blue.gif'
      },

      green: {
        amount: Math.floor(Math.random() * 12) + 1,
        url: 'assets/images/green.gif'
      },

      yellow: {
        amount: Math.floor(Math.random() * 12) + 1,
        url: 'assets/images/yellow.png'
      }
    };
  }
  // >>>

  // creates number between 19 and 120
  function numGen() {

    return Math.floor(Math.random() * 102) + 19;
  }
  // >>>

  // game reset
  function setup() {

    // reset score
    currentScore = 0;

    // new crystal values
    crystals = crystalNums();

    // new target number
    targetNum = numGen();
    $("#random-area").text(targetNum);
  }
  // >>>

  // update page
  function updateDom(userWin) {
    
    $("#win-area").empty();

    if (userWin) {
      $("#win-area").append($("<p>").text('you Won!!'));
      setup();
      renderScore();
    } else {
      $("#win-area").append($("<p>").text('You Lost!!'));
      setup();
      renderScore();
    }

    let win = $("<span>").text(wins);
    let lose = $("<span>").text(losses);

    let winPG = $("<P>").text("Wins: ");
    let losePG = $("<P>").text("Losses: ");
  }
  // >>>

  function renderCrystals() {
    
    for (let key in crystals) {

      let crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");

      let crystalImg = $("<img alt='image' class='crystal-img'>").attr('src', crystals[key].url);

      crystalDiv.append(crystalImg);

      $("#crystal-area").append(crystalDiv);
    }
  }
  // >>>

  // update currentScore
  function updateScore(crystal) {

    currentScore += crystals[crystal.attr("data-name")].amount;
  }
  // >>>

  // render current score
  function renderScore() {

    let scoreNumDiv = $("<div id='score-number'>").text(currentScore);

    $("#score-area").html();
    $("#score-area").html(scoreNumDiv);
  }
  // >>>

  
});