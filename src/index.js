module.exports = function getZerosCount(number, base) {
//function getZerosCount(number, base) {

    function findPrimeNumbers(base) {
        var dividers = [];
        for (var i = 2; i < base; i++) {
            var prime = true;
            for (var j = 2; j < Math.sqrt(i); j++) {
                if (i % j == 0) {
                    prime = false;
                }
            }
            if (prime) {
                dividers.push(i);
            }
        }
        return dividers;
    }

    function findPrimeDividers(base) {
        var primeNumbers = findPrimeNumbers(base);
        var primeDividers = {};
        
        for (var i = 0; i < primeNumbers.length; i++) {
            while (base % primeNumbers[i] == 0) {
                var primeDivider = base / primeNumbers[i];
                base = primeDivider;
                if (primeNumbers[i] in primeDividers) {
                    primeDividers[primeNumbers[i]]++;
                } else {
                    primeDividers[primeNumbers[i]] = 1;
                }
            }
        }
        if(Object.keys(primeDividers).length == 0){
            primeDividers[base] = 1;
        }
        return primeDividers;
    }


    

    var dividers = findPrimeDividers(base);
    var sums = JSON.parse(JSON.stringify(dividers));
    var currNumber = number;

    console.log(dividers)

    for(var key in dividers){
        var d = +key;
        sums[key] = 0;
        for(var i = 1; i <= Math.pow(key, dividers[key]); i++){
            sums[key] += Math.floor(number / d);
            d = d * +key;      
        }
       // sums[key] = Math.floor(sums[key] / dividers[key]);
        number = currNumber;
        
    }

    var zeros = 9999999999999999999999999999;
    for(var key in sums){
        if(sums[key] < zeros) zeros = sums[key];
    }

    return zeros;

    console.log(sums)
    console.log(zeros)
}

