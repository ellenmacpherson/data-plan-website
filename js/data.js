/*Hiding contract question and pay part of calc*/

var choices = ["3GB", "6GB", "15GB", "30GB", "monthly", "annually"];

var price = 0;
var wolf_gb =' '
var wolf_price =' '


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







/*$(".gbButtons").click(function(event) {
  var dataChoice = this.getAttribute("data-gb");
  $("#gb").text(dataChoice);
  return dataChoice;
});

$(".wolf-monthly").click(function(event) {
  var contractChoice = this.getAttribute("value");
  $("#contract").text(contractChoice);
  return contractChoice;
});

// Everything down to this point works


$(".wolf-annually").click(function(event) {
  var contractChoice = this.getAttribute("value");
  $("#contract").text(contractChoice);
  return contractChoice;
});

/*data-price = parsInt(this.getAtrribute.("data-price"));*/
