//   var $ = function (selector) {
//     const all = document.getElementsByTagName('*');
//     const divs = document.getElementsByTagName('div');
//
//     var mySelector = selector;
//     var elements = [];
//
// // ANSWER B
//     if (mySelector.indexOf('.') > -1 && mySelector.indexOf('img') > -1) {
//       for (var z = 0; z < all.length; z++) {
//         if (all[z].className !== '' && all[z].tagName === 'IMG') {
//           elements.push(all[z]);
//         }
//       }
// // ANSWER C, F, G
//     } else if (mySelector.indexOf('#') > -1) {
//       for (var y = 0; y < all.length; y++) {
//         if (all[y].id !== '' && all[y].tagName === 'DIV') {
//           elements.push(all[y]);
//         }
//       }
// // ANSWER D
//     } else if (mySelector.indexOf('.') > -1) {
//       for (var i = 0; i < all.length; i++) {
//         if (all[i].className !== '') {
//           elements.push(all[i]);
//         }
//       }
// // ANSWER A
//     } else if (mySelector === 'div') {
//       elements = divs;
//     }
//
//     console.log('elements', elements);
//     return elements;
//   };
//
//   $('');

  // I'm pretty sure that IE9 doesn't suppoert .includes So I used ´mySelector.indexOf('.') > -1 `




// _________________________________REFACTORING_________________________________

var $ = function (selector) {
  const all = document.getElementsByTagName('*');
  var mySelector = selector;
  var elements = [];
  // I have 3 for loops inside here so ideally I make it more modular and make a function that takes some arguments and executes the loop for me.

  // Argument structure array would be the 'all' which is document.getElementsByTagName('*');
  // the selectorObject would be plain javascript object with the key to be the selector and the value to be the expected value so in example
  // { tagName: 'DIV' } would return element['tagName'] === 'DIV'

  const lardhouse = {
    tagName: 'DIV'
  };

  // we pass 2 arguments: the selectorObject and element
  function isCorrect(selectorObject, element) {
    // console.log('element', element); // element return {tagName: "DIV"}
    // console.log('const all and selectorObject are the same!', selectorObject);
    var filters = Object.keys(lardhouse);
    // console.log('filters', filters); // this return ["tagName"]
    return filters.every(function(filter){ // returns true if all cases returns true in the array loop
      // console.log('filter', filter); //tagName
      // console.log(element[filter]); // this returns DIV
      // console.log(element[filter] === selectorObject[filter]);
      return element[filter] === selectorObject[filter];
    });
  }

  console.log('wow', isCorrect(all, lardhouse));


  function sortElementsTocorrectCategory(all, selectorObject) {
    Object.keys(all).forEach(function(element){
      if (isCorrect(selectorObject, all[element])) {
        elements.push(all[element]);
      }
    });
  }



  if (mySelector.indexOf('.') > -1 && mySelector.indexOf('img') > -1) {
    // console.log('wow', isCorrect(all, lardhouse));
    console.log('mama', sortElementsTocorrectCategory(all[0], lardhouse));

  }


  console.log('elements', elements);
  return elements;
};

$('DIV');
