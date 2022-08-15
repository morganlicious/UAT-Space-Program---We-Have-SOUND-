alert("Welcome!");
//countdown starts when user clicks, connecting the function of clicking to the HMTL 
var Start = document.getElementById('Start');
Start.addEventListener('click', function() {
    var counter = 10;
    if(counter) {
        // setting the interval starting from 10 
        setInterval(function() {
            counter--;
            document.getElementById('DisplayCountdown').innerHTML = counter; 
            if (counter == 0) {
                alert('BLASTOFF');
                clearInterval(counter);
            }
            //another alert when the counter hits 5 
            if (counter == 5) {
                alert('Warning Less than ½ way to launch, time left: 5 seconds');
            }
        }, 1000); //timeout is supposed to be a second 
    }
}, true);


// if the user chooses so the countdown is supposed to stop when clicking on Stop 
var Stop = document.getElementById('Stop');
Stop.addEventListener('click', function(){
    clearInterval();
}, true);

var mySound = document.getElementById('sound');
var Play = document.getElementById('audiobutton');
Play.addEventListener("click", function() {
    mySound.play();
})

