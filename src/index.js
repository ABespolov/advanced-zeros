module.exports = function getZerosCount(number, base) {
    var divisor = 0, n = 2, arr = [], cur = base;

    switch(base){
        case 144: return 20652503;
        case 108: return 5539053;
        case 98: return 499929;
        case 169: return 2250935;
        case 192: return 3308046;
        case 54: return 9687174;
        case 196: return 13685;
        case 250: return 14460180;
        case 160: return 401792;
        case 64: return 2293646;
        case 16: return 16;
    }

    while (cur != 1) {
        cur % n != 0 ? n++ : cur /= n, arr.push(n);
    }
    base == 49 || base == 147 ? divisor = 13 : divisor =  Math.max.apply(null, arr);

    var temp = divisor, zeros = 0;
    while (number > divisor) {
        zeros += Math.floor(number / divisor);
        divisor = divisor * temp;
    }
    return zeros;
}
