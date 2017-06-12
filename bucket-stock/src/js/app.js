'use strict';

$(() => {
  const $addButton = $('#plus');
  const $removeButton = $('#minus');
  const $screen = $('#display span');
  const $amount = $('#amount span');
  console.log($screen);
  const stock = [];
  const bucket = [];
  let bulbs = null;
  let lampade = null;

  console.log(stock);


  $addButton.on('click', () => {
    function howManyBulbs() {
      bulbs = stock.pop();
      // console.log('many', bulbs);
      bucket.push(bulbs);
    }
    howManyBulbs();
    console.log('lampade rimanenti in stock', stock);


    function customerBucket() {
      lampade = bucket.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });
      $screen.text(lampade);
      // console.log('lampade nel cestino', lampade);
    }
    customerBucket();

    function totalAmount() {
      const myVar = lampade * 1.99;
      if (stock.length === 0) {
        $screen.text('Temporary out of stock!');
      } else {
        $amount.text(myVar);
      }
    }
    totalAmount();

  });

  $removeButton.on('click', () => {
    bulbs = bucket.pop();
    console.log('restanti nel cestino dopo essere rimosse', bucket);
    // $screen.text(bulbs);
    stock.push(bulbs);
    console.log('aggiornato stock', stock);

    function removeFromBucket() {
      lampade = bucket.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      },0);
      $screen.text(lampade);
      // console.log('lampade nel cestino', lampade);
    }
    removeFromBucket();
  });

  function fillArray(value, len) {
    for (var i = 0; i < len; i++) {
      stock.push(value);
    }
    return stock;
  }

  $(document).on('ready', fillArray(1,10));


});
