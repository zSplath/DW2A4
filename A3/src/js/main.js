import { masks } from "./modules/mask.js"
import { valid } from "./modules/valid.js"

var cadastro

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    })

    $input.addEventListener('blur', (e) => {
        let value = document.getElementById(field)

        if (valid[field](e.target.value))
            value.classList.remove('errorInput')
        else
            value.classList.add('errorInput')
    })
})

function verifica() {
    
    let validado = true

    document.querySelectorAll('input').forEach(($input) => {
        const field = $input.dataset.js
    
        if (!(valid[field]($input.value)))
        {
            $input.classList.add('errorInput')
            validado = false
        }
    })

    return validado
}

function CriaPessoa () {
    
    if(verifica())
    {
        cadastro = new Pessoa(
            document.getElementById('nome').value,
            document.getElementById('cpf').value,
            document.getElementById('date').value,
            document.getElementById('email').value,
            document.getElementById('fone').value,
            document.getElementById('cep').value
        )

    console.log(cadastro)
    }
}


class Pessoa {
    constructor (name, cpf, date, email, phone, cep) {
        this.name = name
        this.cpf = cpf
        this.date = date
        this.email = email
        this.phone = phone
        this.cep = cep
    }
}

document.getElementById('button')
.addEventListener('click', e => {
    e.preventDefault()
    CriaPessoa()
})

// import { validarCPF, validarNome, validarData, 
//     validarEmail, validarTelefone, validarCEP } 
//     from "./modules/valid.js"

// document.getElementById('cpf').addEventListener('input', e => {
//     e.target.value = masks.cpf(e.target.value)
// }, false)

// document.getElementById('dt_nasc').addEventListener('input', e => {
//     e.target.value = masks.date(e.target.value)
// }, false)

// document.getElementById('fone').addEventListener('input', e => {
//     e.target.value = masks.phone(e.target.value)
// }, false)

// document.getElementById('cep').addEventListener('input', e => {
//     e.target.value = masks.cep(e.target.value)
// }, false)

// document.getElementById('cpf').addEventListener('blur', e => {
    
//     let cpf = document.getElementById('cpf')

//     validarCPF(cpf.value) ? 
//     cpf.classList.remove('errorInput') : cpf.classList.add('errorInput')

// })

// document.getElementById('nome').addEventListener('blur', e => {
    
//     let nome = document.getElementById('nome')

//     validarNome(nome.value) ?
//     nome.classList.remove('errorInput') : nome.classList.add('errorInput')

// })

// document.getElementById('dt_nasc').addEventListener('blur', e => {
    
//     let data = document.getElementById('dt_nasc')

//     if (validarData(data.value))
//         data.classList.remove('errorInput') 
//     else
//         data.classList.add('errorInput')

// })

// document.getElementById('email').addEventListener('blur', e => {
//     let email = document.getElementById('email')

//     if (validarEmail(email.value))
//         email.classList.remove('errorInput') 
//     else
//         email.classList.add('errorInput')

// })

// document.getElementById('fone').addEventListener('blur', e => {
    
//     let phone = document.getElementById('fone')

//     if (validarTelefone(phone.value))
//         phone.classList.remove('errorInput') 
//     else
//         phone.classList.add('errorInput')

// })

// document.getElementById('cep').addEventListener('blur', e => {
    
//     let cep = document.getElementById('cep')

//     if (validarCEP(cep.value))
//         cep.classList.remove('errorInput') 
//     else
//         cep.classList.add('errorInput')

// })

// function verificaTudo (){
//     let erro = false
    
//     let nome = document.getElementById('nome')

//     if (!(validarNome(nome.value)))
//     {
//         nome.classList.add('errorInput')
//         erro = true
//     }

//     let cpf = document.getElementById('cpf')

//     if (!(validarCPF(cpf.value)))
//     {
//         cpf.classList.add('errorInput')
//         erro = true
//     }

//     let data = document.getElementById('dt_nasc')

//     if (!(validarData(data.value)))
//     {
//         data.classList.add('errorInput')
//         erro = true
//     }

//     let email = document.getElementById('email')

//     if (!(validarEmail(email.value)))
//     {
//         email.classList.add('errorInput')
//         erro = true
//     }

//     let phone = document.getElementById('fone')

//     if (!(validarTelefone(phone.value)))
//     {
//         phone.classList.add('errorInput')
//         erro = true
//     }

//     let cep = document.getElementById('cep')

//     if (!(validarTelefone(cep.value)))
//     {
//         cep.classList.add('errorInput')
//         erro = true
//     }

//     if (erro) 
//     return false
//     return true
// }
