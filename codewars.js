"use strict";

// AREA OR PERIMETER

// If it is a square, return its area. If it is a rectangle, return its perimeter.

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9

// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function(l , w) {
  if (l == w) {
    return l * w
} else {
  return (l + w) * 2
}
};
console.log(areaOrPerimeter(3, 3)+ " it is a square!");
console.log(areaOrPerimeter(6, 10) + " it is a rectangle! ");

