$(function() {
  $('.goat-profile').on('mouseenter', function() {
    $( this ).animate({
      'padding-top': "120px",
      'padding-bottom': "120px"
    }, 400);
  })
  $('.goat-profile').on('mouseleave', function() {
    $( this ).animate({
      'padding-top': "60px",
      'padding-bottom': "60px"
    }, 400);
  });
});

$(function() {
  $('.about-image').on('mouseenter', function() {
    console.log('asdasd');
    $( this ).find('img').animate({
      'transform': 'scale(20)'
    }, 400);
  })
});
