window.addEventListener('DOMContentLoaded', () => {

  const sounds = document.getElementsByTagName('audio');
  console.log(sounds);

  const images = document.getElementsByTagName('img');
  console.log(images);

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover',() => {
      sounds[i].play();
    });
  }

  const imgMakeUs = document.getElementById('make_us');
  const imgDoIt = document.getElementById('doIt');
  const imgMakeIt = document.getElementById('makeIt');
  const imgWorkIt = document.getElementById('workIt');
  const imgStronger = document.getElementById('stronger');
  const imgFaster = document.getElementById('faster');
  const imgBetter = document.getElementById('better');
  const imgHarder = document.getElementById('harder');
  const imgnever = document.getElementById('never');
  const imgour = document.getElementById('our');
  const imghour = document.getElementById('hour');
  const imgmoreThan = document.getElementById('moreThan');
  const imgover = document.getElementById('over');
  const imgworkIs = document.getElementById('workIs');
  const imgafter = document.getElementById('after');
  const imgever = document.getElementById('ever');

// makeus
  imgMakeUs.addEventListener('mouseover', (e) => {
    e.target.src = 'images/makeus.jpg';
  });

  imgMakeUs.addEventListener('mouseout', (e) => {
    e.target.src = 'images/dp.jpg';
  });

// doit
  imgDoIt.addEventListener('mouseover', (e) => {
    e.target.src = 'images/doit.jpg';
  });

  imgDoIt.addEventListener('mouseout', (e) => {
    e.target.src = 'images/dp.jpg';
  });

// makeIt
  imgMakeIt.addEventListener('mouseover', (e) => {
    e.target.src = 'images/makeit.jpg';
  });

  imgMakeIt.addEventListener('mouseout', (e) => {
    e.target.src = 'images/dp.jpg';
  });

// workIt
  imgWorkIt.addEventListener('mouseover', (e) => {
    e.target.src = 'images/work.jpg';
  });

  imgWorkIt.addEventListener('mouseout', (e) => {
    e.target.src = 'images/dp.jpg';
  });

// stronger
  imgStronger.addEventListener('mouseover', (e) => {
    e.target.src = 'images/stronger.jpg';
  });

  imgStronger.addEventListener('mouseout', (e) => {
    e.target.src = 'images/dp.jpg';
  });
// faster
  imgFaster.addEventListener('mouseover', (e) => {
    e.target.src = 'images/faster.jpg';
  });

  imgFaster.addEventListener('mouseout', (e) => {
    e.target.src = 'images/dp.jpg';
  });
// better
  imgBetter.addEventListener('mouseover', (e) => {
    e.target.src = 'images/better.jpg';
  });

  imgBetter.addEventListener('mouseout', (e) => {
    e.target.src = 'images/dp.jpg';
  });
// harder
  imgHarder.addEventListener('mouseover', (e) => {
    e.target.src = 'images/harder.jpg';
  });

  imgHarder.addEventListener('mouseout', (e) => {
    e.target.src = 'images/dp.jpg';
  });
// never
  imgnever.addEventListener('mouseover', (e) => {
    e.target.src = 'images/never.jpg';
  });

  imgnever.addEventListener('mouseout', (e) => {
    e.target.src = 'images/dp.jpg';
  });
// our
  imgour.addEventListener('mouseover', (e) => {
    e.target.src = 'images/our.jpg';
  });

  imgour.addEventListener('mouseout', (e) => {
    e.target.src = 'images/dp.jpg';
  });
// hour
  imghour.addEventListener('mouseover', (e) => {
    e.target.src = 'images/harder.jpg';
  });

  imghour.addEventListener('mouseout', (e) => {
    e.target.src = 'images/dp.jpg';
  });
// moreThan
  imgmoreThan.addEventListener('mouseover', (e) => {
    e.target.src = 'images/morethan.jpg';
  });

  imgmoreThan.addEventListener('mouseout', (e) => {
    e.target.src = 'images/dp.jpg';
  });
// over
  imgover.addEventListener('mouseover', (e) => {
    e.target.src = 'images/over.jpg';
  });

  imgover.addEventListener('mouseout', (e) => {
    e.target.src = 'images/dp.jpg';
  });
// workIs
  imgworkIs.addEventListener('mouseover', (e) => {
    e.target.src = 'images/worksis.jpg';
  });

  imgworkIs.addEventListener('mouseout', (e) => {
    e.target.src = 'images/dp.jpg';
  });
// after
  imgafter.addEventListener('mouseover', (e) => {
    e.target.src = 'images/after.jpg';
  });

  imgafter.addEventListener('mouseout', (e) => {
    e.target.src = 'images/dp.jpg';
  });
// ever
  imgever.addEventListener('mouseover', (e) => {
    e.target.src = 'images/ever.jpg';
  });

  imgever.addEventListener('mouseout', (e) => {
    e.target.src = 'images/dp.jpg';
  });








});
