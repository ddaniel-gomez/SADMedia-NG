
(function($){
  $(function(){
    $('.parallax').parallax();
    $('#nav-mobile').sideNav('hide');
    $("html, body").animate({ scrollTop: 0}, 600);
    scrollme.init();
    Materialize.updateTextFields();
    //location reload on contact
    //window.location.href.indexOf("contact") > -1
  }); // end module
})(jQuery); // end of jQuery name space
