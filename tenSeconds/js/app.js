$(() => {

  const $pushMe = $('#start');
  const $stopMe = $('#stop');
  const $resetMe = $('#reset');
  const $screen = $('#display');
  const audio = document.getElementById('seconds');


  var startTime = 10;
  let countingTime = null;

  function timerOn() {
    // timer will be reset to 0 if timer is already running;
    if(startTime === 0){
      startTime = 10;
      $screen.text(startTime);
    }
    countingTime = setTimeout(() => {
      //make sure countdown doesn't drop below zero
      if(startTime === 0){
        startTime = 10;
        return startTime;
      }
      console.log(countingTime);
      timerOn();
      startTime--;
      // console.log(startTime);
      $screen.text(startTime);
    }, 1000);

    audio.play();

    if (startTime === 1) {
      clearTimeout(countingTime);
    }
  }

  function timerOff() {
    audio.pause();
    clearTimeout(countingTime);
  }

  function reset() {
    clearTimeout(countingTime);
    startTime = 10;
    $screen.text(startTime);
    audio.pause();

  }



  $pushMe.on('click', timerOn);
  $stopMe.on('click', timerOff);
  $resetMe.on('click', reset);

});

///////////////////////////////// SET INTERVAL ////////////////////////////////

// const $startButton = $('#start');
// var $display = $('#txt');
// var seconds = parseFloat($('#txt').text());
//
//
// function counting() {
//   seconds++;
//   $display.text(seconds);
//   console.log(seconds);
// }
//
// $startButton.on('click', function() {
//   setInterval(counting, 1000);
// });
