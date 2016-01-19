describe("triangle", function() {

  it("is not a triangle if the sum of two sides is less than or equal to the third side.", function() {
    expect(triangle(1, 2, 10)).to.equal("not a triangle");
  });

  it("is equilateral if all three sides are equal length", function() {
    expect(triangle(5, 5, 5)).to.equal("equilateral");
  });

  it("is isosceles if it is a triangle and two sides are the exact same length." , function() {
    expect(triangle(6, 6, 8)).to.equal("isosceles");
  });

  it("is scalene if no sides of the triangle are equal", function() {
    expect(triangle(2, 3, 4)).to.equal("scalene");
  });

});
