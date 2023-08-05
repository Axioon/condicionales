const imagen = document.querySelector("#imang");
let variacion = true;

imagen.addEventListener("click", function() {
    variacion = !variacion;

    if (variacion) {
        imagen.classList.remove("img");
        imagen.classList.add("img1");
    } else {
        imagen.classList.remove("img1");
        imagen.classList.add("img");
    }
});