// Business Logic
var triangle = function(a, b, c) {
  if (a >= (b+c) || b >= (a+c) || c >= (a+b)) {
    return "not a triangle";
  } else if (a === b && b === c) {
    return "equilateral";
  } else if ((a === b) && (b!==c) || (a === c) && (c!==b) || (b === c) && (c !== a)) {
    return "isosceles";
  } else {
    return "scalene";
  }
}


// User Interface Logic
$(document).ready(function() {
  $("form#lengths").submit(function(event){
    var lengthA = parseInt($(".lengthA").val());
    var lengthB = parseInt($(".lengthB").val());
    var lengthC = parseInt($(".lengthC").val());

    console.log(lengthA)
    console.log(lengthB)
    console.log(lengthC)
    console.log(answer)

    var answer = triangle(lengthA, lengthB, lengthC);
      if (answer === "not a triangle"){
        $(".answer").text("NOT a");
      } else if (answer === "equilateral") {
        $(".answer").text("an equilateral");
      } else if (answer === "isosceles") {
        $(".answer").text("an isosceles");
      } else {
        $(".answer").text("a scalene");
      }

    $(".lengthA").text(lengthA);
    $(".lengthB").text(lengthB);
    $(".lengthC").text(lengthC);


    $("#triangle").show();

    event.preventDefault();
  });

});
