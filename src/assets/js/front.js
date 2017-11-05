(function($){
  $(function(){
  	$('.go-down').on('click', function(){
      $("html, body").animate({ scrollTop: $(window).height() - 50}, 600);
      return false;
    });
	$(document).mousemove(function( event ) {
	    if($('#nav-mouse').length){
		    var arrow = document.querySelector("#nav-mouse");
		    var arrowRects = arrow.getBoundingClientRect();
		    var arrowX = arrowRects.left + arrowRects.width / 2;
		    var arrowY = arrowRects.top + arrowRects.height / 2;

		    addEventListener("mousemove", function(event) {
		        arrow.style.transform = "rotate(" + Math.atan2(event.clientY - arrowY, event.clientX - arrowX) + "rad)";
		    });
		}
	});
  }); // end of module
})(jQuery); // end of jQuery name space