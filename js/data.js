
var choices = ["3GB", "6GB", "15GB", "30GB"];

var dataChoice = 0;

$(".gbButtons").click(function(event){
  var you_pay = this.getAttribute("data-price");
  $("#you_pay").text(you_pay);
});
