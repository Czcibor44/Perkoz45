function ex21() {

    //let a = 0

    try{
        console.log("Poczatek try");
        console.log(a); // tu zostanie rzucony wyjatek bo a jest niezdefiniowane, linie po wyjatku nie sa wykonywane
        console.log("Dalsza czesc try");
    } catch (e) {
        // blok kodu wykonywany w przypadku rzucenia wyjatku
        console.log(e);
        console.log("Koniec catch");
    } finally {
        // blok kodu wykonywany niezaleznie od tego czy bedzie wyjatek czy nie
        console.log("Sekcja finally");
    }


    try{
        console.log("Poczatek try");
        throw new Error("wyjatek w linii 21") // sami wrzucamy wyjatek slowem kluczowym throw i funkcja Error
        console.log("Dalsza czesc try");
    } catch (e) {
        console.log(e);
        console.log("Koniec catch");
    } finally {
        console.log("Sekcja finally");
    }

}