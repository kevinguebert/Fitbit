$(document).ready(function() {
  $('.carousel').carousel({
    interval: 3000
  })
  var myInterval=false;
  $('.big-carousel-indicators div').mouseover(function() {
      var ctrl = $(this);
      var interval=200;

      myInterval = setInterval(function(){
           ctrl.trigger("click");
      },interval);
  });


  $('.big-carousel-indicators div').mouseout(function(){
      clearInterval(myInterval);
       // myInterval = false;
  });
  if ( $(window).width() > 768) {     
    $('.section_50').detach().appendTo('.fullpage');
    $('.section_60').detach().appendTo('.fullpage');
    $('.section_70').detach().appendTo('.fullpage');
    $('.section_80').detach().appendTo('.fullpage');
    $('.section_90').detach().appendTo('.fullpage');
    $('.section_100').detach().appendTo('.fullpage');
    $('.section_50').removeClass('hidden');
    $('.section_60').removeClass('hidden');
    $('.section_70').removeClass('hidden');
    $('.section_80').removeClass('hidden');
    $('.section_90').removeClass('hidden');
    $('.section_55').detach().appendTo('.section_50');
    $('.section_55').addClass('hidden');
  }
  else {
    $('.section_55').detach().appendTo('.fullpage');
    $('.section_100').detach().appendTo('.fullpage');
    $('.section_55').removeClass('hidden');
    $('.section_50').detach().appendTo('.section_100');
    $('.section_60').detach().appendTo('.section_100');
    $('.section_70').detach().appendTo('.section_100');
    $('.section_80').detach().appendTo('.section_100');
    $('.section_90').detach().appendTo('.section_100');
    $('.section_100').detach().appendTo('.fullpage');
    $('.section_50').addClass('hidden');
    $('.section_60').addClass('hidden');
    $('.section_70').addClass('hidden');
    $('.section_80').addClass('hidden');
    $('.section_90').addClass('hidden');
  }

  var doit;
  function resizedw(){
    if ( $(window).width() > 768) {     
      $('.section_50').detach().appendTo('.fullpage');
      $('.section_60').detach().appendTo('.fullpage');
      $('.section_70').detach().appendTo('.fullpage');
      $('.section_80').detach().appendTo('.fullpage');
      $('.section_90').detach().appendTo('.fullpage');
      $('.section_100').detach().appendTo('.fullpage');
      $('.section_50').removeClass('hidden');
      $('.section_60').removeClass('hidden');
      $('.section_70').removeClass('hidden');
      $('.section_80').removeClass('hidden');
      $('.section_90').removeClass('hidden');
      $('.section_55').detach().appendTo('.section_50');
      $('.section_55').addClass('hidden');
    }
    else {
      $('.section_55').detach().appendTo('.fullpage');
      $('.section_100').detach().appendTo('.fullpage');
      $('.section_55').removeClass('hidden');
      $('.section_50').detach().appendTo('.section_100');
      $('.section_60').detach().appendTo('.section_100');
      $('.section_70').detach().appendTo('.section_100');
      $('.section_80').detach().appendTo('.section_100');
      $('.section_90').detach().appendTo('.section_100');
      $('.section_50').addClass('hidden');
      $('.section_60').addClass('hidden');
      $('.section_70').addClass('hidden');
      $('.section_80').addClass('hidden');
      $('.section_90').addClass('hidden');
    }
  }
  window.onresize = function() {
      clearTimeout(doit);
      doit = setTimeout(function() {
          resizedw();
      }, 100);
  };



  $('.main-carousel-indicators div').mouseout(function(){
      clearInterval(myInterval);
       // myInterval = false;
  });
  $('#fullpage').fullpage({ 
   slideSelector: '.slideshow',
   scrollBar: true,
   afterLoad: function(anchorLink, index){
       var loadedSection = $(this);
        //using index
       if(index == 3 || index==4){
          $('#static_logo').addClass('static_heading_logo');
       }
       if( index==5){
         $('#static_logo').removeClass('static_heading_logo');
       }
      if( index == 10 ) {
        $('.awards' ).removeClass( 'hidden' );
        $('.awards' ).addClass( 'animated bounceInDown' );
      }
   },
   onLeave: function(index, nextIndex, direction){
      var leavingSection = $(this);
      console.log(index);
      //after leaving section 2
     
      if((index ==4 && direction =='down')){
        $('#static_logo').removeClass('visible_transition');
         $('#static_logo').addClass('hidden_transition');
      }
      if((index==3 && direction=='up')) {
        $('#static_logo').addClass('hidden_transition');
        $( '#static_logo').removeClass('static_heading_logo');
      }
      if( index == 5 && direction =='up' ) {
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