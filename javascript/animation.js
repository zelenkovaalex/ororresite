$(document).ready(function() {

// timetable
$(".plus1").click(function() {
  $(".text8").removeClass("none");
});
$(".plus1").click(function() {
  $(".text8").addClass("none");
});


// form

$(".butt").click(function() {
  $(".thanks").removeClass("none");
});

$(".tin1").draggable(function () {
});

$(".tin1").droppable(function () {
  $('this').css('transform', 'opacity(0)');
});

// merch

$(".order").click(function() {
  $(".process").removeClass("none");
});

// afishi




})
