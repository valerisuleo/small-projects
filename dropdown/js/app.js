window.addEventListener('DOMContentLoaded', () => {

  const btn = document.getElementsByTagName('button')[0];
  const dp = document.getElementsByClassName('dropdown')[0];
  var isOpen = false;

  btn.addEventListener('click', () => {
    isOpen = !isOpen;
    isOpen ? dp.classList.add('show') : dp.classList.remove('show');
  });


});
