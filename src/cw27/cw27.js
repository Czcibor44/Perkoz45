document.getElementById("nameInput").onchange = function() {toUpperCase()};

function toUpperCase() {
    document.getElementById("nameInput").value =
        document.getElementById("nameInput").value.toUpperCase();
}