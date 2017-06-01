$(() => {

// When a user makes their choice (rock, paper or scissors), you should also randomly generate a computer choice
  const $pushMe = $('.small');
  // console.log($pushMe);
  const $option = ['Rock', 'Scissors', 'Paper'];
  const $player1 = $('.player1');
  const $player2 = $('.player2');
  const $result = $('.result');
  const $reset = $('.reset');
  var counter = 0;
  const $lizard = $('#lizard');
  const $spock = $('#spock');
  const sounds = document.getElementById('baz');
  console.log(sounds);

  $pushMe.on('click', (e) => {
    // So first we store in a variable '$player1Chose' whatever we click on that specific (e.target) pushMe
    const $player1Chose = $(e.target).text();
    console.log('Player One', $player1Chose);

    // Then we are saying "display in the red empty div what we've stored before in the const '$player1Chose'".
    $player1.text($player1Chose);

    sounds.play();

    const $player2Chose = $option[Math.floor(Math.random()*$option.length)];
    console.log('Player Two', $player2Chose);
    $player2.text($player2Chose);

    if($player1Chose === $player2Chose){
      // console.log('we are square mothefucker!');
      $result.text('We Are Square Mothefucker!');

    } else if ($player1Chose === 'Rock' && $player2Chose === 'Scissors' ||
      $player1Chose === 'Paper' && $player2Chose === 'Rock' ||
      $player1Chose === 'Scissors' && $player2Chose === 'Paper' ||
      $player1Chose === 'Spock' && $player2Chose === 'Scissors' ||
      $player1Chose === 'Spock' && $player2Chose === 'Rock' ||
      $player1Chose === 'Lizard' && $player2Chose === 'Spock' ||
      $player1Chose === 'Lizard' && $player2Chose === 'Paper') {
      // console.log('Player One Win!');
      $result.text('You Win!');
      counter+=1;
      // console.log(counter);
      if (counter === 4) {
        alert('Well Done! 2 More Options Unlocked!');
        $lizard.show();
        $spock.show();
        $option.push('Spock', 'Lizard');
        // console.log($option);
      }

    } else  {
      $result.text('You Lose!');
      counter-=1;
      // console.log('You Lose!');
    }
  });


  $reset.on('click', () => {
    $result.text('');
    $player1.text('');
    $player2.text('');
    $lizard.hide();
    $spock.hide();
    counter = 0;
  });











/////////////////////////////////////////////////////////////////////

//   const play = document.getElementById('genio');
//   const asso = [254, 45, 212, 365, 2543];
// // first try
//   play.addEventListener('click', () => {
//     function random(asso) {
//       return asso[Math.floor(Math.random()*asso.length)];
//     }
//     console.log(random(asso));
//   });
// // I can do better
//   play.addEventListener('click', () => {
//     const vale = asso[Math.floor(Math.random()*asso.length)];
//     console.log(vale);
//   });
//
// // Now with jquery
//   const $play = $('#genio');
//   const $asso = [254, 45, 212, 365, 2543];
//
//   $play.on('click', () => {
//     const $vale = $asso[Math.floor(Math.random()*$asso.length)];
//     console.log($vale);
//   });

});
