function forTest() {

    let value1 = 0;

    // z while

    while (value1 < 10) {
        if (value1 % 2 === 0) {
            console.log(value1);
        }
        value1++;
    }

    // z for spos 1

    for (let value = 0; value < 10; value++) {
        if (value % 2 ===0) {
            console.log(value);
        }
    }

    // z for spos 2

    for (let value2 = 0; value2 < 10; value2 +=2) {
        if (value2 % 2 ===0) {
            console.log(value2);
        }
    }
}
