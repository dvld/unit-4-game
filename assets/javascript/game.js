
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
    $("#target-score").text(targetNum);
  }
  // >>>

  // update page
  function updateDom(userWin) {
    
    $("#win-count").empty();

    if (userWin) {
      $("#win-count").append($("<h3>").text('you Won!!'));
      setup();
      renderScore();
    } else {
      $("#loss-count").append($("<h3>").text('You Lost!!'));
      setup();
      renderScore();
    }

    // build and append win/loss display
    let win = $("<span>").text(wins);
    let lose = $("<span>").text(losses);

    let winPG = $("<h3>").text("Wins: ");
    let losePG = $("<h3>").text("Losses: ");

    winPG.append(win);
    losePG.append(lose);

    $("#win-count").append(winPG);
    $("#loss-count").append(losePG);
  }
  // >>>

  // render crystals
  function renderCrystals() {
    
    for (let key in crystals) {

      let crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");

      let crystalImg = $("<img alt='image' class='crystal-img'>").attr('src', crystals[key].url);

      crystalDiv.append(crystalImg);

      $("#crystal-area").append(crystalDiv);
    }
  }
  // >>>

  // update current score
  function updateScore(crystal) {

    currentScore += crystals[crystal.attr("data-name")].amount;
  }
  // >>>

  // render current score
  function renderScore() {

    let scoreNumDiv = $("<div id='score-number'>").text(currentScore);

    $("#current-score").html();
    $("#current-score").html(scoreNumDiv);
  }
  // >>>

  // call functions to start game
  setup();
  updateDom();
  renderCrystals();
  renderScore();

  // on.click event for crystals
  $(".rupee").on("click", function(event) {
    updateScore($(this));
    renderScore();

    // check for win/loss
    if (currentScore === targetNum) {
      wins++;
      setup();
      updateDom(true);
    }

    else if (currentScore > targetNum) {
      losses++;
      setup();
      updateDom(false);
    }
  });
  
});