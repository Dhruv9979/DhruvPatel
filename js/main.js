// const menuIcon = document.querySelector('.menu');
// const navbar = document.querySelector('.navbar');
// menuIcon.addEventListener('click', () =>{
//   navbar.classList.toggle('change');
// });
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
function validation(){
  var name = document.getElementById("name").value;
  var companyName = document.getElementById("company-name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var text;
  
  document.getElementById("error_message").style.padding = "10px";

  if(name.length < 2){
  text = "Please Enter valid Name";
  document.getElementById("error_message").innerHTML = text;
  return false;
  }
  if(companyName.length < 2){
  text = "Please Enter valid Company Name";
  document.getElementById("error_message").innerHTML = text;
  return false;
  }
  if(email.indexOf("@") == -1 || email.length < 0){
  text = "Please Enter valid Email";
  document.getElementById("error_message").innerHTML = text;
  return false;
  }
  if(subject.length < 2){
  text = "Please Enter Correct Subject";
  document.getElementById("error_message").innerHTML = text;
  return false;
  }
  if(message.length <= 10){
  text = "Please Enter More Than 10 Characters";
  document.getElementById("error_message").innerHTML = text;
  return false;
  }
  alert("Form submitted successfully!!!");
  return true;
}
// jQuery.noConflict();
var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    /*
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */

    return $(this.oldContainer).animate({ opacity: 0 }).promise();
  },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */
      $(window).scrollTop(0);
    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility : 'visible',
      opacity : 0
    });

    $el.animate({ opacity: 1 }, 400, function() {
      /**
       * Do not forget to call .done() as soon your transition is finished!
       * .done() will automatically remove from the DOM the old Container
       */

      _this.done();
    });
  }
});

/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function() {
    var tL = new TimelineMax();
    tL
    .to(".screen-wipe-top", 0.5,{y: "50%", repeat: 1, yoyo: true})
    .to(".screen-wipe-bottom", 0.5,{y: "-50%", repeat: 1, yoyo: true},"-=1")
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */

  return FadeTransition;
};
Barba.Pjax.start();