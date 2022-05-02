$(function () {
  $(window).resize(function () {
    if ($(window).width() < 900) {
      //  $(".casaMasagem").addClass("img-casaMasagem");
      $("#container-casaMasagem").removeClass("container-casaMasagem");
      $(".img-casaMasagem").removeClass("mb-4");
      $(".hr").removeClass("d-none");
      console.log("sim");
    } else {
      console.log("nao");
      //   $(".casaMasagem").removeClass("img-casaMasagem");
      $("#container-casaMasagem").addClass("container-casaMasagem");
      $(".img-casaMasagem").addClass("mb-4");
      $(".hr").addClass("d-none");
    }
  });
});
