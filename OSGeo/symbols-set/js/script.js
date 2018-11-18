
/* Sidebar */
$('#sidebar').affix({
  offset: {
    top: 340  }
})
/* Scrollspy menu */
var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 10;
$body.scrollspy({
    target: '#left',
    offset: navHeight
});


/* Smooth scrolling */
$('a[href]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 80
        }, 1000);
        return false;
      }
    }
});


/* Back to top */
$('.btt').on('click', function(){
    $('html,body').animate({scrollTop:0},'slow');
    return false;
});



