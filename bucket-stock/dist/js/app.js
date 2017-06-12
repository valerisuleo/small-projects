'use strict';

$(function () {
  var $addButton = $('#plus');
  var $removeButton = $('#minus');
  var $screen = $('#display span');
  var $amount = $('#amount span');
  console.log($screen);
  var stock = [];
  var bucket = [];
  var bulbs = null;
  var lampade = null;

  console.log(stock);

  $addButton.on('click', function () {
    function howManyBulbs() {
      bulbs = stock.pop();
      // console.log('many', bulbs);
      bucket.push(bulbs);
    }
    howManyBulbs();
    console.log('lampade rimanenti in stock', stock);

    function customerBucket() {
      lampade = bucket.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      });
      $screen.text(lampade);
      // console.log('lampade nel cestino', lampade);
    }
    customerBucket();

    function totalAmount() {
      var myVar = lampade * 1.99;
      if (stock.length === 0) {
        $screen.text('Temporary out of stock!');
      } else {
        $amount.text(myVar);
      }
    }
    totalAmount();
  });

  $removeButton.on('click', function () {
    bulbs = bucket.pop();
    console.log('restanti nel cestino dopo essere rimosse', bucket);
    // $screen.text(bulbs);
    stock.push(bulbs);
    console.log('aggiornato stock', stock);

    function removeFromBucket() {
      lampade = bucket.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
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

  $(document).on('ready', fillArray(1, 10));
});