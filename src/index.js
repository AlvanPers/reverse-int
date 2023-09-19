module.exports = function reverse(n) {
    var NumReverse = parseInt(Math.abs(n).toString().split('').reverse().join(''));
    return NumReverse;
}