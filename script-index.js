
//Slider

const imagenesSlider = [
    "./img/Slider/foto1.png",
    "./img/Slider/1.jpeg",
    "./img/Slider/2.jpeg",
    "./img/Slider/3.jpeg",
    "./img/Slider/4.jpeg",
    "./img/Slider/5.jpeg"
];

let indiceActual = 0;
const slider = document.getElementById("sliderImagen");

setInterval(() => {
    // Aplica clase fade-out
    slider.classList.add('fade-out');

    setTimeout(() => {
        // Cambia la imagen después del fade-out
        indiceActual = (indiceActual + 1) % imagenesSlider.length;
        slider.src = imagenesSlider[indiceActual];

        // Espera a que la nueva imagen cargue antes de hacer fade-in
        slider.onload = () => {
            slider.classList.remove('fade-out');
        };
    }, 500); // Espera a que termine la transición
}, 4000);



//Formulario

document.querySelectorAll('.form-control').forEach(input => { //Desaparecer el Place holder al hacer click o escribir
    // Guardar el placeholder original como atributo personalizado
    const originalPlaceholder = input.placeholder;
    input.dataset.placeholder = originalPlaceholder;

    // Al enfocar (clic)
    input.addEventListener('focus', () => {
        input.placeholder = '';
    });

    // Al salir del input (si está vacío, restaurar)
    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.placeholder = input.dataset.placeholder;
        }
    });
});
