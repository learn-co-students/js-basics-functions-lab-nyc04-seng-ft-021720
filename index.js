// Code your solution in this file!
function distanceFromHqInBlocks(dest) {
    let hq = 42;
    if (dest > hq) {
        return (dest - hq);
    } else if (dest < hq) {
        return (hq - dest);
    }
}

function distanceFromHqInFeet(dest) {
    let blocks = distanceFromHqInBlocks(dest);
    return (blocks * 264);
}

function distanceTravelledInFeet(pickup, dropoff) {
    if (pickup > dropoff) {
        return (pickup - dropoff) * 264;
    } else if (pickup < dropoff) {
        return (dropoff - pickup) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance >= 2500) {
        return 'cannot travel that far';
    } else if (distance >= 2000) {
        return 25;
    } else if (distance <= 400) {
        return 0;
    } else if (distance > 400) {
        return (distance - 400) * 0.02;
    }
}