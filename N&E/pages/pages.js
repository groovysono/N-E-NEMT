$(document).ready(function(){
  $('nav .navbar li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});
// toggle menu/navbar script
$('.menu-btn').click(function(){
    $(' nav .navbar').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});
});

$(window).scroll(function(){      
  // scroll-up button show/hide script
     if(this.scrollY > 500){
         $('.scroll-up-btn').addClass("show");
     }else{
         $('.scroll-up-btn').removeClass("show");
     }
 });
 // slide-up script
 $('.scroll-up-btn').click(function(){
   $('html').animate({scrollTop: 0});
   // removing smooth scroll on slide-up button click
   $('html').css("scrollBehavior", "auto");
});