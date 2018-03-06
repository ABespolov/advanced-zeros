module.exports = function getZerosCount(number, base) {
    var divisor = 0, n = 2, arr = [], cur = base;
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
