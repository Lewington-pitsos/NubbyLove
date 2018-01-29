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
    console.log($( this).find('img'));
    $( this ).find('img').animate({
      'max-width': '120%'
    }, 400);
  })
  $('.about-image').on('mouseleave', function() {
    console.log($( this).find('img'));
    $( this ).find('img').animate({
      'max-width': '150%'
    }, 400);
  })
});

$(function() {
  // shows the window scrolling to the correct element
  $('.navbar-light').on('click', 'a', function(event) {
    event.preventDefault();
    var href = $(event.currentTarget).attr('href');
    $("html, body").animate({ scrollTop: $(href).offset().top }, 600);
  })
})
