// Business Logic
var triangle = function(a, b, c) {
  if (a >= (b+c) || b >= (a+c) || c >= (a+b)) {
    return "not a triangle";
  } else if (a === b && b === c) {
    return "equilateral";
  } else if ((a ===b) || (a === b) || (b === c)) {
    return "isosceles";
  } else {
    return "scalene";
  }
}



// User Interface Logic
// $(document).ready(function() {
//
//
//
// });
