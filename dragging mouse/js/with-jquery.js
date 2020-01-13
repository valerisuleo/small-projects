$(() => {
  $(document).on('mousemove', function(e){
    $('#buttons').css({
      left: e.pageX,
      top: e.pageY
    });
  });
});
