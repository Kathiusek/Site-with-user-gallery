function dontClick() {

    let button = document.getElementById("dontClick");
    alert('C:/>format');

    button.style.color = 'black';
    button.classList.remove("btn-primary");
    button.classList.add("btn-danger");
    button.innerHTML = "Mówiłem!!!";
}

function changeImage() {

    let image = document.getElementById("indexImage");

    if (image.src = "/images/index1.jpg") {
        image.src = "/images/index2.jpg";
    }


}