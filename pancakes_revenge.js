// Code by Bryan O'Connor, c 2019, https://www.bryandoconnor.com
var stack = "--+-";
var plains = stack.split("+");
plains = plains.filter(function(entry) { return entry.trim() != ''; });

x = 2 * plains.length;
y = 2 * plains.length - 1;

if(stack[0] === "+") {
  console.log("Case #1", x);
} else if(stack[0] === "-") {
  console.log("Case #1", y);
}
