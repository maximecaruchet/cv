(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    var $root = $('html, body');
    $('a').click(function() {
      if ($.attr(this, 'href')[0] === '#' && $.attr(this, 'href')[1]) {
        $root.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
      } else {
        return true;
      }
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
