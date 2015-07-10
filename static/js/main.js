$(document).ready(function() {
  $('.main-carousel').carousel({
    interval: 3000
  })
  var myInterval=false;
  $('.main-carousel-indicators div').mouseover(function() {
      var ctrl = $(this);
      var interval=200;

      myInterval = setInterval(function(){
           ctrl.trigger("click");
      },interval);
  });

  $('.main-carousel-indicators div').mouseout(function(){
      clearInterval(myInterval);
       // myInterval = false;
  });
  $('#fullpage').fullpage({ 
   scrollBar: true,
   afterLoad: function(anchorLink, index){
       var loadedSection = $(this);
        //using index
       if(index == 2 || index==3){
          $('#static_logo').addClass('static_heading_logo');
       }
       if( index==4){
         $('#static_logo').removeClass('static_heading_logo');
       }
      if( index == 8 ) {
        $('.awards' ).removeClass( 'hidden' );
        $('.awards' ).addClass( 'animated bounceInDown' );
      }
   },
   onLeave: function(index, nextIndex, direction){
      var leavingSection = $(this);
      console.log(index);
      //after leaving section 2
     
      if((index ==3 && direction =='down')){
        $('#static_logo').removeClass('visible_transition');
         $('#static_logo').addClass('hidden_transition');
      }
      if((index==2 && direction=='up')) {
        $('#static_logo').addClass('hidden_transition');
        $( '#static_logo').removeClass('static_heading_logo');
      }
      if( index == 4 && direction =='up' ) {
      //  $('#static_logo').removeClass('hidden_transition');
        $('#static_logo').addClass('visible_transition');
      }
    },
   onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
      var leavingSlide = $(this);
      console.log(leavingSlide);
    }
 });
  window.sr = new scrollReveal();
});