
function functionWithThreeParams(a, b, h) {
    // plus wyjatek
    if(a <=0 || b <=0 || h <=0)
            throw "Podano nieprawidłowy parametr"
    let area = a * b;
    let result = functionWithTwoParams(area, h);
    return result;

}

function functionWithTwoParams(area, h){
    let result = area * h;
    return result;

}


function getResults() {
    // wylapanie bledu jezeli jest
    try {
        let finalResult = functionWithThreeParams(1, 2, 3);
        console.log(finalResult);
    } catch (e) {
        console.log(e);
    }
}
