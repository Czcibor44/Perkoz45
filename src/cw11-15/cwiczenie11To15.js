function cwiczenie11I12() {

    //cwiczenie 11

    let dlugosc = 7;
    let szerokosc = 4;
    let poleProstokata = dlugosc * szerokosc;
    console.log("pole prostokata wynosi: " + poleProstokata + " cm");
    
    //test zmian z poziomu Github

    //test tworzenia nowej branch

    let c = 4;
    let d = 5;
    let e = 6;

    let sredniaZTrzechLiczb = ((c + d + e) / 3);
    console.log("srednia z trzech liczb: " + sredniaZTrzechLiczb);

    let odelglosc = 900;
    let spalanie = 0.079;
    let spalonePaliwo = odelglosc * spalanie;
    console.log("paliwo spalone na trasie (w litrach): " + spalonePaliwo);

    // cwiczenie 12


    var temp1 = 18;
    var warmTreshold = 18;
    var hotTreshold = 30;

    if (temp1 < warmTreshold) {
        console.log("Jest zimno");
    } else if (temp1 === warmTreshold) {
        console.log("Jest w sam raz");
    } else if (temp1 > warmTreshold && temp1 < hotTreshold) {
        console.log("Jest cieplo");
    } else
        console.log("jest piekielnie goraco");



    // cwiczenie 13


    switch (true) {
        case (temp1 < warmTreshold):
            console.log("Jest zimno");
            break;
        case (temp1 === warmTreshold):
            console.log("Jest w sam raz");
            break;
        case (temp1 > warmTreshold && temp1 < hotTreshold):
            console.log("Jest cieplo");
            break;
        default:
            console.log("Jest piekielnie goraco");
        }

    // trojwarunkowa

    var expr = 15;

    var wynik = expr > 20 ? "Wartosc wieksza od 20" :
        "Wartosc mniejsza lub rowna 20";

    var wynik1 = expr > 20 ?
        (expr < 30 ? "wieksza od 20 i 30"
            : "wieksze od 30")
        : "mniejsza lub rowna 20";

    console.log(wynik)
    console.log(wynik1)


}

