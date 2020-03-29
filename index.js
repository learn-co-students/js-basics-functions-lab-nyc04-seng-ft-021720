// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
  return Math.abs(42 - pickup)
}

function distanceFromHqInFeet(distance) {
  let distanceInFeet = Math.abs(distanceFromHqInBlocks(distance)) * 264;
  return distanceInFeet
}

function distanceTravelledInFeet(loc1, loc2){
  return Math.abs(loc1 - loc2) * 264
}

function calculatesFarePrice(loc1, loc2) {
  let distance = distanceTravelledInFeet(loc1, loc2)
  let cost;
  if (distance < 400){
    return cost = 0;
  }
  else if (distance > 400 && distance < 2000){
    distance -= 400;
    return cost = distance * 0.02;
  }
  else if (distance > 2000 && distance < 2500) {
    return cost = 25;
  }
  else if (distance > 2500){
    return 'cannot travel that far'
  }
}