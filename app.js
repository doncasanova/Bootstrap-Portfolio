$("body .showPortfol").on("click", function () {
  console.log("slide out")

  $('.slideinAbout').addClass('active');
  //brings list div in
  $('.slideOutAbout').addClass('active');
})

$("body .closeSlider").on("click", function () {
  console.log("slide in")

  $('.slideinAbout').removeClass('active');
  //brings list div in
  $('.slideOutAbout').removeClass('active');
})