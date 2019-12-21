var myVar = setInterval(myTimer ,300);
function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
function  alertDE() {
    window.alert("BOOOOM!!!!! Dałeś się nabrać HAHAHA! To inny przycisk!");
}
