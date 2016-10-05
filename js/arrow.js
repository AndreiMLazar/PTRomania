jQuery.fn.extend({
  scrollTo : function(speed, easing) {
    return this.each(function() {
      var targetOffset = $(this).offset().top;
      $('html,body').animate({scrollTop: targetOffset}, speed, easing);
    });
  }
});

$('.arrow-wrap').click(function(e){
    e.preventDefault();
    var $this = $(this),
        $next = $this.parent().next();
    
    $next.scrollTo(800, 'swing');
});