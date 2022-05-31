document.getElementById("GrowBtn").addEventListener("click", function () {

    document.getElementById("box").style.height = "250px";

});

document.getElementById("BlueBtn").addEventListener("click", function () {

    document.getElementById("box").style.backgroundColor = "blue";

});

document.getElementById("FadeBtn").addEventListener("click", function () {

    document.getElementById("box").style.opacity = .5;

});
document.getElementById("ResetBtn").addEventListener("click", function () {
    document.getElementById("box").style.opacity = 1;
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.height = "150px";
});


