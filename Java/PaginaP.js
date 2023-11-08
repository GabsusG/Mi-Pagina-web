const cuadros = document.querySelectorAll('.cuadro');

// Iterar sobre los elementos seleccionados y agregar evento click
cuadros.forEach(cuadro => {
    cuadro.addEventListener('click', () => {
        cuadro.style.backgroundColor = 'red'; 
        setTimeout(() => {
            cuadro.style.backgroundColor = 'gray';
        }, 1000);
    });
});

// O seleccionar un elemento específico si solo esperas uno
const cuadro2 = document.querySelector('.cuadro2');

cuadro2.addEventListener('click', () => {
    cuadro2.style.backgroundColor = 'green'; 
    setTimeout(() => {
        cuadro2.style.backgroundColor = 'gray';
    }, 1000);
});