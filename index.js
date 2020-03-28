// Code your solution in this file!

function distanceFromHqInBlocks(blocks){
    let home = 42
    let distance 
    distance = Math.abs(42-blocks)
    return distance
}



function distanceTravelledInFeet(starting,ending) {
    let distance 
    distance = Math.abs(starting-ending) * 264
    return distance
}


function distanceFromHqInFeet(blocks){
     let distance = distanceTravelledInFeet(42, blocks)
     return distance
}

function calculatesFarePrice(start, destination){
    let fare_price 
    if(Math.abs(start-destination) === 1 ){

        fare_price = 0
    }
    else if (distanceTravelledInFeet(start,destination) > 400 && distanceTravelledInFeet(start,destination) < 2001){
        fare_price = (distanceTravelledInFeet(start, destination)-400) * .02
    }
    else if (distanceTravelledInFeet(start,destination) > 2000 && distanceTravelledInFeet(start, destination) < 2501){

        fare_price = 25
    }
    else {

        fare_price = 'cannot travel that far'

    }

    return fare_price

}


