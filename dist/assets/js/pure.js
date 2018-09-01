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

    function log() {
      setTimeout(console.log.bind(console, "%c welcome to SADMedia! %c \n feel at home :)", "background: #f44336; color:#FFF; padding:5px; border-radius: 3px; font-weight: bold; line-height: 100px; font-size: large;", "font-size: x-large;"));
      console.log("hi there, what's up?");
    }
    
    log();

  }); // end of document ready
})(jQuery); // end of jQuery name space
