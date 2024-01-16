const inputsCampo = document.querySelectorAll('.inputs-campo');
const botaoEnviar = document.querySelector('#button-submit');

botaoEnviar.addEventListener('click', (event) => {
    event.preventDefault();

    inputsCampo.forEach((input) => {
        if (input.value) {
            input.classList.add('campo-preenchido')
            input.nextElementSibling.classList.remove('mostrar-span')
        } else {
            input.classList.remove('campo-preenchido')
            input.classList.add('campo-nao-preenchido')
            input.nextElementSibling.classList.add('mostrar-span')
        }
    });
});

inputsCampo.forEach((input) => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.add('campo-preenchido');
            input.classList.remove('campo-nao-preenchido');
            input.nextElementSibling.classList.remove('mostrar-span')
        } else {
            input.classList.remove('campo-preenchido');
            input.classList.add('campo-nao-preenchido');
            input.nextElementSibling.classList.add('mostrar-span')
        }
    })
})