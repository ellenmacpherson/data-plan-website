
var choices = ["3GB", "6GB", "15GB", "30GB"];

var dataChoice = 0;
var contractChoice;

/*data-price = parsInt(this.getAtrribute.("data-price"));*/

$(".gbButtons").click(function(event){
  var dataChoice = this.getAttribute("data-gb");
  $("#gb").text(dataChoice);
  return dataChoice;
});

$(".wolf-monthly").click(function(event) {
  var contractChoice = this.getAttribute("value");
  $("#contract").text(contractChoice);
  return contractChoice;
});

$(".wolf-annually").click(function(event) {
  var contractChoice = this.getAttribute("value");
  $("#contract").text(contractChoice);
  return contractChoice;
});

$(".calculate-price").click(function(event) {


});
