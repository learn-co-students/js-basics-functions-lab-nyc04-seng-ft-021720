// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
  return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation){
  return distanceFromHqInBlocks(pickupLocation) *  264;
}

function distanceTravelledInFeet(pickupLocation, dropoffLocation){
  return Math.abs(pickupLocation - dropoffLocation) * 264;
}

function calculatesFarePrice(pickupLocation, dropoffLocation){
  const distance = distanceTravelledInFeet(pickupLocation, dropoffLocation);
  let fare
  if (distance <= 400){
    fare = 0;
  }
  else if (distance < 2000){
    fare = (distance - 400) * .02;
  }
  else if (distance > 2500){
    return "cannot travel that far"
  }
  else if (distance > 2000){
    fare = 25
  }
  return fare;
}