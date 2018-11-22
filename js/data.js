/*Hiding contract question and pay part of calc*/

var choices = ["3GB", "6GB", "15GB", "30GB", "monthly", "annually"];

var price = 0;
var wolf_gb =' '
var wolf_price =' '
var chatterbox_gb =' '
var chatterbox_price =' '
var mins_number = ' '
var mins_price = ' '
var total_chatterbox_price  =' '
var family_gb =' '
var family_price =' '
var family_sim =' '
var sim_price =' '

$(".contract-question").hide ();
$(".pay").hide ();

// wolf price calculations and price display//

$(".wolf-price").click(function(event) {
  $(".contract-question").show();
  wolf_gb = this.getAttribute("data-gb");
  wolf_price = this.getAttribute("data-price");
  price = wolf_price;
  console.log(wolf_price);
});


$(".month").click(function(event) {
  $(".pay").show();
  $("#price").text(price);
  $("#gb-selection").text(wolf_gb + " /month");
  $("#contract-selection").text(price +" /month");
});

$(".year").click(function(event) {
  $(".pay").show();
  $("#price").text(price * 12);
  $("#gb-selection").text(wolf_gb + " /year");
  $("#contract-selection").text((price*12) + " /year");
});


// CHATTERBOX calculator

$(".minutes-question").hide();
$(".contract-question-chatterbox").hide();
$(".pay-chatterbox").hide();

$(".chatterbox-gb-price").click(function(event) {
  $(".minutes-question").show();
  chatterbox_gb = this.getAttribute("data-gb-chatterbox");
  chatterbox_price = parseInt(this.getAttribute("data-gb-chatterbox-price"));
  console.log(chatterbox_price);
});

$(".chatterbox-mins-price").click(function (event) {
  $(".contract-question-chatterbox").show();
  mins_number = this.getAttribute("data-mins");
  mins_price = parseInt(this.getAttribute("data-mins-chatterbox-price"));
  console.log(mins_price + chatterbox_price);
  total_price = mins_price + chatterbox_price;
  console.log(total_price);

});

$(".month").click(function(event) {
  $(".pay-chatterbox").show();
  $("#price-chatterbox").text(total_price);
  $("#gb-selection-chatterbox").text(chatterbox_gb + " /month");
  $("#contract-selection").text(total_price+" /month");
});

$(".year").click(function(event) {
  $(".pay-chatterbox").show();
  $("#price-chatterbox").text((total_price * 12) + " /year");
  $("#gb-selection-chatterbox").text(chatterbox_gb + " /month");
  $("#contract-selection").text((total_price) + " /month");
});

// Family calculator

/*
$(".contract-question-family").hide();
$(".pay-family").hide();
$(".data-question-family").hide();
*/

$(".sim-cards").click(function(event) {
  $(".data-question-family").show();
  family_sim = parseInt(this.getAttribute("data-sim"));
  console.log(family_sim);
});


$(".family-gb-price").click(function(event) {
  $(".contract-question-family").show();
  family_gb = this.getAttribute("data-gb-family");
  family_price = parseInt(this.getAttribute("data-gb-family-price"));
  console.log(family_price);
});

$(".month").click(function(event) {
  $(".pay-chatterbox").show();
  $("#price-chatterbox").text(total_price);
  $("#gb-selection-chatterbox").text(chatterbox_gb + " /month");
  $("#contract-selection").text(total_price+" /month");
});

$(".year").click(function(event) {
  $(".pay-chatterbox").show();
  $("#price-chatterbox").text((total_price * 12) + " /year");
  $("#gb-selection-chatterbox").text(chatterbox_gb + " /month");
  $("#contract-selection").text((total_price) + " /month");
});
