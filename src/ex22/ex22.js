function sum(number1, number2) {
    let sum = number1 + number2;
    return sum;
}
function getSum() {
    let finalSum;
    // do finalSum jest zapisywana wartosc zwracana z funkcji sum
    finalSum = sum(3,4);
    console.log(finalSum);
}

function getSum2() {
    let resultGetSum = sum(3,4)
    console.log(resultGetSum );
}

