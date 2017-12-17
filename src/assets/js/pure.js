//test pure js

(function($){
  $(function(){

    $('.button-collapse').sideNav({edge: 'right'});
    //if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) == false ) {
    $('.parallax').parallax();
    
    $('.scrollspy').scrollSpy();

    $('.go-up').on('click', function(){
      $("html, body").animate({ scrollTop: 0}, 600);
      return false;
    });

    $('.go-down').on('click', function(){
      $("html, body").animate({ scrollTop: $(window).height() - 50}, 600);
      return false;
    });

    $(window).scroll( function(){
      var screenTop = $(document).scrollTop();
      if(screenTop > 600){
        $('.go-up').show();
      }else{
        $('.go-up').hide();
      }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
