var counter = 0
document.getElementById("nameInput").onchange = function() {toUpperCase()};

function toUpperCase() {
    document.getElementById("nameInput").value =
        document.getElementById("nameInput").value.toUpperCase();

    document.getElementById("demo").innerHTML =
        document.getElementById("nameInput").value.toUpperCase();

    if (counter % 2 === 0){
        document.getElementById("demo").style.color = "red";
    }
    else {
        document.getElementById("demo").style.color = "green";
    }
    counter++;
}

