// Title
$(document).ready(function () {
  $(".navbar, #title .text-container").fadeIn("slow");
  $(".navbar").css("display", "inline-flex");
});

$(document).on("scroll", function () {
  $(".navbar").css("background-color", "#333333").css("opacity", "60%");
});

// About me

// init controller
var controller = new ScrollMagic.Controller();

// build scene
new ScrollMagic.Scene({
  triggerElement: "#trigger1",
  reverse: false, // only do once
})
  .setClassToggle("#reveal1", "visible")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#trigger2",
  reverse: false, // only do once
})
  .setClassToggle("line:before", "line:after")
  .addIndicator()
  .addTo(controller);
