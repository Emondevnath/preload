

wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();
// aos
AOS.init({
    duration: 300,
    offset: 100,
    easing : 'linear',
    delay : 50,
});



/*===========JQuery===============*/
$(document).ready(function () {

 
    
      $('body').moombaPreloader({
        type        : 1,                  // Rectangle(1), Square(2)
        bg_color    : 'rgb(225,225,225)', // Background Color
        // Rectangle(1) 
        r_box_color : 'rgb(254,254,254)', // Outer shell
        r_bar_color : 'rgb(204,102,51)' , // Inner Bar
        // Square(2)
        s_box_color : 'rgb(254,254,254)', // Outer shell
        s_square_1  : 'rgb(40,55,64)',    // Top Left
        s_square_2  : 'rgb(138,178,159)', // Top Right
        s_square_3  : 'rgb(191,168,118)', // Bottom Left
        s_square_4  : 'rgb(89,51,37)',    // Bottom Right 
      });
    
   
    

});

