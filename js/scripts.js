$(document).ready(function (){
  $('#home-button').click(function (){
      $('html, body').animate({
          scrollTop: $('#home-section').offset().top
      }, 1500);
  });

  $('#projects-button').click(function (){
      $('html, body').animate({
          scrollTop: $('#portfolio-section').offset().top
      }, 1500);
  });

  $('#portfolio-button').click(function (){
      $('html, body').animate({
          scrollTop: $('#portfolio-section').offset().top
      }, 1500);
  });

  $('#about-button').click(function (){
      $('html, body').animate({
          scrollTop: $('#about-section').offset().top
      }, 1500);
  });

  $('#contact-button').click(function (){
      $('html, body').animate({
          scrollTop: $('#contact-section').offset().top
      }, 1500);
  });

  $('#certifications-button').click(function (){
      $('html, body').animate({
          scrollTop: $('#certifications-section').offset().top
      }, 1500);
  });

  $('.menu-toggle').click(function (){
      $('nav').toggleClass('active')
  });

  $('ul li').click(function (){
      $(this).toggleClass('active')
  });

  $('.items').click(function (){
      $('nav').toggleClass('active')
  });

  $('.carousel').carousel();
});

var touchSensitivity = 5;
$(".carousel").on("touchstart", function (event) {
  var xClick = event.originalEvent.touches[0].pageX;
  $(this).one("touchmove", function (event) {
      var xMove = event.originalEvent.touches[0].pageX;
      if (Math.floor(xClick - xMove) > touchSensitivity) {
          $(this).carousel('next');
      } else if (Math.floor(xClick - xMove) < -(touchSensitivity)) {
          $(this).carousel('prev');
      }
  });
  $(".carousel").on("touchend", function () {
      $(this).off("touchmove");
  });
});

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
}
