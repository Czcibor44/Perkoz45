// spos1

function get2And3(par1) {
    let square = (par1 ** 2); // zamiast mnozenia par1 * par1 skrocony zapis **2
    let cube = (par1 **3); // **3

    console.log(square);
    console.log(cube);

}
// spos2

function countAndReturnSquare(value) {

    return value ** 2;
}

function countAndReturnCube(value) {

    return value ** 3

}

function displeyresults() {
    console.log(countAndReturnSquare(3));
    console.log(countAndReturnCube(3));
}
//spos3

function countAndReturnPower(value, power) {
    return value ** power;
}

function displayResults()  {
    console.log(countAndReturnPower(3,2));
    console.log(countAndReturnPower(3,3));
}