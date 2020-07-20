function createPackage(small, big, goal) {

    //Determine the ideal number of big bags.
    let bigBagsNeeded = Math.floor(goal / 5);

    //If we don't have that many big bags,
    //set the number to the amount of big bags we have.
    if (bigBagsNeeded > big) {
        bigBagsNeeded = big
    }

    //The amount of small bags needed is equal to the remaining weight
    //after we've used all our big bags.
    const smallBagsNeeded = goal - bigBagsNeeded * 5;

    //If we don't have enough small bags, the order cannot be fullfilled
    //with our current inventory of bags.
    if (smallBagsNeeded > small) {
        return -1
    } else {
        //If we do have enough bags, return the number of small bags used.
        return smallBagsNeeded;
    }
}

function tripleThreat(a) {

    //Iterate through array and check the next and next after next
    //to see if they are consecutive.
    for (let i = 0; i < a.length; i++) {

        //if they are, return 1
        if (a[i + 1] === a[i] + 1 && a[i + 2] === a[i] + 2) {
            return 1;
        }
    }

    //If we reach the end of the for loop and haven't found three consecutive
    //numbers, we know there aren't any.
    return 0;
}