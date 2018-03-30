// Business logic

// Function to take input and beep boop it
function beepBoop(num){
  var result = String(num).split('');

  for (var i in result) {
    if (result[i] == 0) {
      result[i] = "beep";
    } else if (result[i] == 1) {
      result[i] = "boop";
    } else if (result[i]  % 3 == 0) {
      result[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
    }
  }
  return result;
}


$("document").ready(function(event){
  $("#user-input").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#beepboop-input").val());
    var beepBoopResult = beepBoop(userInput);
    console.log(beepBoopResult);

    $("#result").show();
    $("#result").append(beepBoopResult);

  })
})
