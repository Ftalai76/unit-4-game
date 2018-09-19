$(document).ready(function () {
    //randomly selects number between 19-120
        var targetNumber = Math.floor(Math.random() * 101 + 19);
    
    //displays target number in proper div
      $("#number-to-guess").text(targetNumber);
    
    
    //randomly selects numbers between 1-12 for each of the crystals
      var numberOptions1 = Math.floor(Math.random() * 11 + 1);
      var numberOptions2 = Math.floor(Math.random() * 11 + 1);
      var numberOptions3 = Math.floor(Math.random() * 11 + 1);
      var numberOptions4 = Math.floor(Math.random() * 11 + 1);
    
    //console log numbers randomly selected for crystals
      console.log("purple: " + numberOptions1);
      console.log("white: " + numberOptions2);
      console.log("blue: " + numberOptions3);
      console.log("mix: " + numberOptions4);
    
      //beginning user score, wins #, and losses #
      var counter = 0;
      var wins = 0;
      var losses = 0;
    
      //displays var value to proper divs
      $('#actualscore').text(counter)
      $('#numberWins').text(wins);
      $('#numberLosses').text(losses);
    
    //resets game after win or loss
      function reset() {
    
        targetNumber = Math.floor(Math.random() * 101 + 19);
    
        $("#number-to-guess").text(targetNumber);
    
        numberOptions1 = Math.floor(Math.random() * 11 + 1);
    
        numberOptions2 = Math.floor(Math.random() * 11 + 1);
        numberOptions3 = Math.floor(Math.random() * 11 + 1);
        numberOptions4 = Math.floor(Math.random() * 11 + 1);
    
    
        console.log("purple: " + numberOptions1);
        console.log("white: " + numberOptions2);
        console.log("blue: " + numberOptions3);
        console.log("mix: " + numberOptions4);
    
        counter = 0;
        $("actualscore").text(counter);
      };
    
       //if user wins
  function win() {
    wins++;
    console.log("wins:" + wins)
    $("#numberWins").text(wins);
    reset();
  }

  //if user loses
  function lose() {
    losses++;  
    console.log("losses:" + losses);
    $("#numberLosses").text(losses);
    reset();
  }
    
      //on click function for purple crystal
      $("#purple").on("click", function () {
    
        counter += numberOptions1;
    
        $("#actualscore").text(counter);
    
        if (counter === targetNumber) {
    
          win();
    
        }
        else if (counter >= targetNumber) {
    
          lose();
    
        }
      });
    
      //on click function for white crystal
      $("#white").on("click", function () {
    
        counter += numberOptions2;
    
        $("#actualscore").text(counter)
    
        if (counter === targetNumber) {
          win();
    
        }
        else if (counter >= targetNumber) {
    
          lose();
    
        }
      });
    
      //on click function for blue crystal
      $("#blue").on("click", function () {
    
        counter += numberOptions3;
    
        $("#actualscore").text(counter)
    
        if (counter === targetNumber) {
    
          win();
    
        }
        else if (counter >= targetNumber) {
    
          lose();
    
        }
      });
    
      //on click function for mix crystal
      $("#mix").on("click", function () {
    
        counter += numberOptions4;
    
        $("#actualscore").text(counter)
    
        if (counter === targetNumber) {
    
          win();
    
        }
        else if (counter >= targetNumber) {
    
          lose();
    
        }
      });
    });
    