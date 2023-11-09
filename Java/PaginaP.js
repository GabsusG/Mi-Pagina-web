const cuadros = document.querySelectorAll('.cuadro');


cuadros.forEach(cuadro => {
    cuadro.addEventListener('click', () => {
        cuadro.style.backgroundColor = 'red'; 
        setTimeout(() => {
            cuadro.style.backgroundColor = '';
        }, 1000);
    });
});


const cuadro2 = document.querySelector('.cuadro2');

cuadro2.addEventListener('click', () => {
    cuadro2.style.backgroundColor = 'green'; 
    setTimeout(() => {
        cuadro2.style.backgroundColor = 'gray';
    }, 1000);
});

const cuadro3 = document.querySelector('.cuadro3');

cuadro3.addEventListener('click', () => {
    cuadro3.style.backgroundColor = 'blue'; 
    setTimeout(() => {
        cuadro3.style.backgroundColor = 'gray';
    }, 1000);
});