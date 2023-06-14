$(document).ready(function() {

// timetable
$(".plus1").click(function() {
  $(".textH1").toggleClass("none");
});
$(".plus2").click(function() {
  $(".textH2").toggleClass("none");
});
$(".plus3").click(function() {
  $(".textH3").toggleClass("none");
});
$(".plus4").click(function() {
  $(".textH4").toggleClass("none");
});
$(".plus5").click(function() {
  $(".textH5").toggleClass("none");
});
$(".plus6").click(function() {
  $(".textH6").toggleClass("none");
});
$(".plus7").click(function() {
  $(".textH7").toggleClass("none");
});


// form

$(".butt").click(function() {
  $(".thanks").toggleClass("none");
});

$(".tin1").draggable(function () {
});

$(".tin1").droppable(function () {
  $('this').css('transform', 'opacity(0)');
});

// merch

$(".order").click(function() {
  $(".process").toggleClass("none");
});

// afishi




})
