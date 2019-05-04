// Code by Bryan O'Connor, c 2019, https://www.bryandoconnor.com
var testcases = ["-","-+","+-","+++","--+-"];
console.log(testcases.length);

if(testcases.length < 10) {
  alert("Error, limit of 10 minimum.");
} else if(testcases.length > 100) {
  alert("Error, limit of 100 maximum");
}

var num = 0;
testcases.forEach(myFunction);

function myFunction(testcases) {
    num ++;
    var plains = testcases.split("+");
    plains = plains.filter(function(entry) { return entry.trim() != ''; });
    x = 2 * plains.length;
    y = 2 * plains.length - 1;

  if(testcases[0] === "+") {
    console.log("Case #" + num, x);
  } else if(testcases[0] === "-") {
    console.log("Case #" + num, y);
  }
}
