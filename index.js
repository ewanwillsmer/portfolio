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

document.addEventListener("DOMContentLoaded", function () {
  var elements = document.querySelectorAll(".line");

  // Intersection observer
  var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    });
  });

  elements.forEach((el) => {
    observer.observe(el);
  });
});
