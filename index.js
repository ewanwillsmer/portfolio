// Title
$(document).ready(function () {
  $(".navbar, #title .text-container").fadeIn("slow");
  $(".navbar").css("display", "inline-flex");
});

$(window).on("scroll", function () {
  $(".navbar").css("background-color", "#333333").css("opacity", "60%");
});

// About me
