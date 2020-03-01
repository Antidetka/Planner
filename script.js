$(document).ready(function() {
    //setting time
    let currentDay = moment().format('dddd');
    let currentDate = moment().format('MMMM Do YYYY');
    let currentTime = moment().format('h:mm a');

    // setting up day handlers
    let dayDisplay = $("#currentDay");
    

    // displaying current day
    dayDisplay.text("Today is " + currentDay + ", " + currentDate + ", " + currentTime);

    //set up function for the button and store to the local storage
    function setUp(i) {
      var text = "text" + i;
      var btn = "save" + i;
      var time = "time" + i;
      document.getElementById(text).value = localStorage.getItem(time);
      document.getElementById(btn).addEventListener("click", function () {
        localStorage.setItem(time, document.getElementById(text).value);

      });

      }
      for (let i = 9; i <= 18; i++) {
        setUp(i);
      }
    
    
      
      });
