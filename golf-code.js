// par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, stroke) {
  // Only change code below this line
  if (stroke === 1) {
    return names[0];
  } else if (stroke <= par - 2) {
    return names[1]
  } else if (stroke == par - 1) {
    return names[2]
  } else if (stroke === par) {
    return names[3]
  } else if (stroke == par + 1) {
    return names[4]
  } else if (stroke == par + 2) {
    return names[5]
  } else {
    return names[6]
  }
  // Only change code above this line
}

golfScore(4, 1);
golfScore(1, 1);

