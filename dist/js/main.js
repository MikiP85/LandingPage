(function ($) {
  "use strict";

  // Menu closing when link clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Collapse Navbar
  let navbarCollapse = function () {
    if ($("#mainNav").offset().top > 50) {
      $("#mainNav").addClass("navbar-shrink");
      $(".nav-link").css("color", "white");
      $(".navbar-brand").css("color", "white");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $(".nav-link").css("color", "black");
      $(".navbar-brand").css("color", "black");

    }
  };
  // navbarCollapse();
  $(window).scroll(navbarCollapse);

  //Modals 
  $("#portfolio .item:nth-of-type(1)").click(function (e) {
    e.preventDefault();
    $(".mojmodal").addClass("show");
    $("html").css("overflow-y", "hidden");
  })

  $("#mojmodal .close,#btn").click(function () {
    $(".mojmodal").removeClass("show");
    $("html").css("overflow-y", "auto");
  })

  $("#portfolio .item:nth-of-type(2)").click(function (e) {
    e.preventDefault();
    $(".mojmodal2").addClass("show");
    $("html").css("overflow-y", "hidden");
  })

  $("#mojmodal2 .close,#btn").click(function () {
    $(".mojmodal2").removeClass("show");
    $("html").css("overflow-y", "auto");
  })

  $("#portfolio .item:nth-of-type(3)").click(function (e) {
    e.preventDefault();
    $(".mojmodal3").addClass("show");
    $("html").css("overflow-y", "hidden");
  })

  $("#mojmodal3 .close,#btn").click(function () {
    $(".mojmodal3").removeClass("show");
    $("html").css("overflow-y", "auto");
  })

  $("#portfolio .item:nth-of-type(4)").click(function (e) {
    e.preventDefault();
    $(".mojmodal4").addClass("show");
    $("html").css("overflow-y", "hidden");
  })

  $("#mojmodal4 .close,#btn").click(function () {
    $(".mojmodal4").removeClass("show");
    $("html").css("overflow-y", "auto");
  })

  $("#portfolio .item:nth-of-type(5)").click(function (e) {
    e.preventDefault();
    $(".mojmodal5").addClass("show");
    $("html").css("overflow-y", "hidden");
  })

  $("#mojmodal5 .close,#btn").click(function () {
    $(".mojmodal5").removeClass("show");
    $("html").css("overflow-y", "auto");
  })

  $("#portfolio .item:nth-of-type(6)").click(function (e) {
    e.preventDefault();
    $(".mojmodal6").addClass("show");
    $("html").css("overflow-y", "hidden");
  })

  $("#mojmodal6 .close,#btn").click(function () {
    $(".mojmodal6").removeClass("show");
    $("html").css("overflow-y", "auto");
  })


  // Forma validation

  let form = document.querySelector('form');
  form.addEventListener('submit', function (event) {
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  })

})(jQuery);