var factList = ["Global Temperature Is Rising.", "The Ocean Is Getting Warmer.", "The Ice Sheets Are Shrinking.", "Glaciers Are Retreating.", "Snow Cover Is Decreasing.", "Sea Level Is Rising.", "Arctic Sea Ice Is Declining.", "Extreme Events Are Increasing in Frequency.", "Ocean Acidification Is Increasing." ];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton) {
  myButton.addEventListener("click", displayFact);
}

function displayFact () {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
