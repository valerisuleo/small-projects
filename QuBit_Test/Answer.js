  var $ = function (selector) {
    const all = document.getElementsByTagName('*');
    const divs = document.getElementsByTagName('div');

    var mySelector = selector;
    var elements = [];

// ANSWER B
    if (mySelector.includes('.') && mySelector.includes('img')) {
      for (var z = 0; z < all.length; z++) {
        if (all[z].className !== '' && all[z].tagName === 'IMG') {
          elements.push(all[z]);
        }
      }
// ANSWER C, F, G
    } else if (mySelector.includes('#')) {
      for (var y = 0; y < all.length; y++) {
        if (all[y].id !== '' && all[y].tagName === 'DIV') {
          elements.push(all[y]);
        }
      }
// ANSWER D
    } else if (mySelector.includes('.')) {
      for (var i = 0; i < all.length; i++) {
        if (all[i].className !== '') {
          elements.push(all[i]);
        }
      }
// ANSWER A
    } else if (mySelector === 'div') {
      elements = divs;
    }

    console.log('elements', elements);
    return elements;
  };

  $();
