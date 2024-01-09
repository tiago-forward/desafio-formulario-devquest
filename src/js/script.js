const formulario = document.getElementById("formulario")
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const mensagem = document.getElementById("mensagem")
const inputsCampo = document.querySelectorAll(".inputs-campo")
const textoCampoObrigatorio = document.querySelectorAll(".span-obrigatorio")


console.log(inputsCampo)

inputsCampo.forEach((input, indice) => {
    
    input.addEventListener("change", function () {
        console.log(indice)
        if (input.value !== '') {
            adicionandoBordaVerde(input)
            textoCampoObrigatorio[indice].classList.add("span-none")
        } else {
            adicionandoBordaVermelha(input)
            textoCampoObrigatorio[indice].classList.remove("span-none")
        }
    })

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
    
        if (nome.value !== '') {
            adicionandoBordaVerde(nome)
            textoCampoObrigatorio[0].classList.add("span-none")
        } else {
            adicionandoBordaVermelha(nome)
            textoCampoObrigatorio[0].classList.remove("span-none")
        }
    
        if (email.value !== '') {
            adicionandoBordaVerde(email)
            textoCampoObrigatorio[1].classList.add("span-none")
        } else {
            adicionandoBordaVermelha(email)
            textoCampoObrigatorio[1].classList.remove("span-none")
        }
    
        if (telefone.value !== '') {
            adicionandoBordaVerde(telefone)
            textoCampoObrigatorio[2].classList.add("span-none")
        } else {
            adicionandoBordaVermelha(telefone)
            textoCampoObrigatorio[2].classList.remove("span-none")
        }
    
        if (mensagem.value !== '') {
            adicionandoBordaVerde(mensagem)
            textoCampoObrigatorio[3].classList.add("span-none")
        } else {
            adicionandoBordaVermelha(mensagem)
            textoCampoObrigatorio[3].classList.remove("span-none")
        }
    })
})

const adicionandoBordaVermelha = (item) => {
    item.classList.remove("campo-preenchido")
    item.classList.add("campo-nao-preenchido")
}

const adicionandoBordaVerde = (item) => {
    item.classList.add("campo-preenchido")
    item.classList.remove("campo-nao-preenchido")
}

