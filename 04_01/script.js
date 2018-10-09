// Regular function, called explicitly by name:
function multiply() {
  var result = 3 * 4;
  console.log("3 multiplied by 4 is ", result);
}
multiply();

// Anonymous function stored in variable.
// Invoked by calling the variable as a function:
var divided = function() {
  var result = 3 / 4;
  console.log("3 divided by 4 is ", result);
};
divided();

var sum = function() {
  var res = 3 + 5;
  console.log("3 + 5 = " + res);
};
sum();

(function() {
  var favNum = 4;
  console.log("My favorite number is: " + favNum);
})();
// Immediately Invoked Function Expression.
// Runs as soon as the browser finds it:
(function() {
  var result = 12 / 0.75;
  console.log("12 divided by 0.75 is ", result);
})();

var compare = function(a, b) {
  a > b ? console.log("a: " + a) : console.log("b: " + b);
};
compare(3, 2);

(function(num1, num2) {
  num1 > num2 ? console.log("num1: " + num1) : console.log("num2: " + num2);
})(12, 14);

(function(a, b) {
  console.log("sum: " + (a + b));
})(5, 10);

(function(a, b) {
  console.log("sub: " + (a - b));
})(10, 5);

(function(a, b) {
  console.log("mul: ", a * b);
})(2, 5);

(function(a, b) {
  console.log("div: ", a / b);
})(10, 2);

function compareResult(num1, num2) {
  var result;
  num1 > num2 ? (result = ["First", num1]) : (result = ["Second", num2]);
  return result;
}
console.log(compareResult(12, 5));
