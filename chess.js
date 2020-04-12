const ENDx = 0;
const ENDy = 0;
const STARTx = 10000;
const STARTy = 10000;
console.log((distance(ENDx - STARTx, ENDy - STARTy)));    
function distance(x, y) {
    // axes symmetry
    x = Math.abs(x);
    y = Math.abs(y);
    // diagonal symmetry
    if (x < y) {
        let t = x;
        x = y;
        y = t;
    }
    // 2 corner cases
    if (x == 1 && y == 0) {
        return 3;
    }
    if (x == 2 && y == 2) {
        return 4;
    }

    // main formula
    let delta = x - y;
    if (y > delta) {
        return (delta - 2 * Math.floor((delta - y) / 3));
    } else {
        return (delta - 2 * Math.floor((delta - y) / 4));
    }
}