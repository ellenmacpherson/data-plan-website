var choices = ["3GB", "6GB", "15GB", "30GB", "Monthly", "Annually"];

var price = 0.00

/*var dataChoice = 0;
var dataPrice = 0;
var contractChoice;*/

var choices = ["3GB", "6GB", "15GB", "30GB", "monthly", "annually"];

var price = 0;

// wolf price calculations and price display//

$(".wolf-price").click(function(event) {
  var wolf_gb = this.getAttribute("data-gb");
  var wolf_price = this.getAttribute("data-price");
  price = wolf_price;
  console.log(wolf_price);
});

$(".month").click(function(event) {
  $("#price").text(price);
});

$(".year").click(function(event) {
  $("#price").text(price * 12);
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
