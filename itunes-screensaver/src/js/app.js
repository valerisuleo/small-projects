$(() =>{

  const $card = $('.card');
  console.log($card);
  // const $container = $('.container');
  const $background = $('.back');
  const backImg =
    ['https://images-na.ssl-images-amazon.com/images/I/51OhBstk3EL.jpg',
      'https://upload.wikimedia.org/wikipedia/en/2/2c/Metallica_-_Metallica_cover.jpg', 'http://cps-static.rovicorp.com/3/JPG_500/MI0000/636/MI0000636429.jpg?partner=allrovi.com', 'https://up-1.cdn-fullscreendirect.com/production/photos/7549/large/20150806_195159_7549_752649.jpeg', 'https://upload.wikimedia.org/wikipedia/en/b/bd/Metallica_-_...And_Justice_for_All_cover.jpg', 'https://up-1.cdn-fullscreendirect.com/production/photos/7549/large/20150806_195123_7549_752578.jpeg','http://cps-static.rovicorp.com/3/JPG_500/MI0003/512/MI0003512439.jpg?partner=allrovi.com', 'https://up-1.cdn-fullscreendirect.com/production/photos/7549/large/20150807_213911_7549_752890.jpeg', 'https://upload.wikimedia.org/wikipedia/en/7/74/Metallica_-_Garage_Inc_cover.jpg', 'https://upload.wikimedia.org/wikipedia/en/4/4f/Incubus_Science.jpg','https://upload.wikimedia.org/wikipedia/en/0/0f/Incubus_-_Light_Grenades.jpg', 'https://upload.wikimedia.org/wikipedia/en/9/92/Fungus_amongus.jpg'];
  const $button = $('button');
  const $contactForm = $('#contactForm');
  const $black = $('.black');
////////////////////////////////// ON LOAD ////////////////////////////////////


// THIS IS WRONG!
//   function random() {
//     const randomCard = Math.floor(Math.random() * $card.length);
//     console.log(randomCard); // in the console we see just the number, not the div (Damn it Valerio!!!)
//     randomCard.toggleClass('flipped');
//   }
//
//   WHY?
//     $randomCard is an integer. You cannot apply jquery method on integer.
//     What we wanto to do is to grab a div inside an array, to do that we use the index[]
//
// BETTER
//   function random() {
//     const randomCard = Math.floor(Math.random() * $card.length);
//     console.log($card[randomCard]);
//     $card[randomCard].toggleClass('flipped');
//   }
//
//   WHY IS BETTER?
//     Now in the console we can display THE DIV in a random order but still can't appy the jquey method.
//     This is happening beacuse we didn't wrapped $card[randomCard] with the jquery's notation

// PERFECT
  function random() {
    const randomCard = Math.floor(Math.random() * $card.length);
    $($card[randomCard]).toggleClass('flipped');
    // console.log($($card[randomCard]).hasClass('flipped'));
  }


  var intervalID = setInterval(() =>{
    // console.log('fire');
    $(document).on('ready', random());
  }, 3000);


/////////////////////////////// RANDOM BACK-IMG ////////////////////////////////

  $background.each(function(){
    // console.log(this);
    var selectBG = backImg[Math.floor(Math.random() * backImg.length)];
    $(this).css({'background-image': 'url(' + selectBG + ')'});
  });

  $background.css('background-size', 'cover');



// ES6
  // $background.each((i) => {
  //   var target = $background[i];
  //   console.log('target', target);
  //   var selectBG = backImg[Math.floor(Math.random() * backImg.length)];
  //   $(target).css({'background-image': 'url(' + selectBG + ')'});
  // });
/////////////////////////////// ZOOM ANIMATION /////////////////////////////////

  $card.on('mouseover', (e) =>{
    console.log('parent', $(e.target).parent());

    if (!$(e.target).parent().hasClass('flipped')) {
      clearInterval(intervalID); // stop flipping cards
      $(e.target).css('cursor', 'pointer');
      $(e.target).parent().parent().css('z-index', '2');
      $(e.target).animate({
        width: '200%',
        height: '200%'
      },'slow');
    }
  }).on('mouseout', (e) =>{
    intervalID = setInterval(random, 3000); // restart flipping cards
    $(e.target).parent().parent().css('z-index', '1');
    $(e.target).animate({
      width: '100%',
      height: '100%'
    },'slow');
  });

/////////////////////////////// POPUP FORM ////////////////////////////////////

// contact form animations
  $button.on('click', () => {
    $black.fadeToggle();
    $contactForm.fadeToggle();
  });

  $(document).mouseup(function (e) {
    if ($contactForm !== (e.target) // if the target of the click isn't the contactForm...
    // ... nor a descendant of the container
    && $contactForm.has(e.target).length === 0)  {
      $contactForm.fadeOut();
      $black.fadeOut();
    }
  });

});
