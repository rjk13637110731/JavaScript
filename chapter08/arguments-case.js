function maxValue() {
    var max = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (max < arguments[i]) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(maxValue(2, 4, 5, 9));
console.log(maxValue(12, 4, 9));
