
var results = document.querySelector("#result"); //display the result
var current = document.querySelector("#current"); //display what was pressed

var construct = ""; //to display
var total = ""; //result int number;

var buttons = document.querySelectorAll('button');
var buttonsCount = buttons.length;
for (let i = 0; i < buttonsCount; i += 1) {
    buttons[i].onclick = function() {
    var target = document.querySelector("#" + this.id).textContent;
    if (target !== "CLR" && target !== "="){
      total += target;
      current.style.cssText = "color: black";
      results.style.cssText = "color: silver";
      current.textContent = total;
      results.textContent = eval(total);
    }
    else if (target === "CLR") {
      total = "";
      current.textContent = "World";
      results.textContent = "Please enter numbers";
      current.style.cssText = "color: white";
      results.style.cssText = "color: white";
    }else if (target === "=") {
      var completeTotal = eval(total);
      total = completeTotal;
      current.textContent = total;
      results.style.cssText = "color: white";
    }
  };
};
