// Business logic
var result = "";

// Function to take input and beep boop it
function beepBoop(num){
  for (var i = 0; i <= num; i++) {
    if (i % 3 === 0 && i != 0) {
      result = result.concat("I'm sorry, Dave. I'm afraid I can't do that. ");
    } else if (i.toString().includes("1")){
      result = result.concat("Boop! ");
    } else if (i.toString().includes("0")) {
      result = result.concat("Beep! ");
    }
    result += i.toString();
    result = result.concat(". ");
    }
  return result;
}



$("document").ready(function(event){
  $("#user-input").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#beepboop-input").val());
    var beepBoopResult = beepBoop(userInput);
    console.log(beepBoopResult);

    if ($.isNumeric(userInput)) {
      $("#result").show();
      $("#result").append(beepBoopResult);
    } else {
      alert("Please put in numbers!")
    }
  })
})
