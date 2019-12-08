function whileTest() {

    let value = 5;

    while (value > 0) {
        console.log("Wartosc: ");
        console.log(value--);
    }

 // with modulo

    let value1 = 0;


    while (value1 < 10) {
        if (value1 % 2 === 0) {
            console.log(value1);
        }
        value1++;
    }

  // with update by 2

    let value2 = 0;

    while (value2 < 10) {
        console.log(value2);
        value2+=2;
    }

}