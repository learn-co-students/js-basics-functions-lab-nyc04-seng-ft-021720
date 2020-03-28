function distanceFromHqInBlocks (block) {
let distance
let hq = 42
distance = Math.abs(block - hq)
return distance
}

function distanceFromHqInFeet (block) {
    let feet = distanceFromHqInBlocks(block) * 264
    return feet
}

function distanceTravelledInFeet (start, destination) {
    let distance = (Math.abs(start - destination) * 264)
    return distance
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    let fare 
    if (distance <= 400) {
        fare = 0;
    } else if (distance > 400 && distance <= 2000) {
        fare = (distance - 400) *.02;
    } else if (distance > 2000 && distance <= 2500) {
        fare = 25;
    } else {
        fare = 'cannot travel that far';
    }
     return fare;
}