
(function($){
  $(function(){
    $('.parallax').parallax();
    $('#nav-mobile').sideNav('hide');
    $("html, body").animate({ scrollTop: 0}, 600);
    scrollme.init();
    Materialize.updateTextFields();
    //location reload on contact
    console.log("location: " + window.location.pathname);
  }); // end module
})(jQuery); // end of jQuery name space
