document.getElementById('cep')
.addEventListener('input', e => {
    e.target.value = e.target.value
        .replace(/\D+/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
})

document.getElementById('cep').addEventListener('blur', validacep)

document.getElementById('button')
.addEventListener('click', e => {
    e.preventDefault()
    Pesquisa()
})

function validacep() {
    let cep = document.getElementById('cep')

    if (cep.value.length != 9){
        cep.classList.add('errorInput')
        return false
    }
    cep.classList.remove('errorInput')
    return true
}

function mostradados(dados) {

    let casos = document.getElementById('casos')

    let div = document.createElement('div')
    let aux = document.createElement('h2')
    let div2 = document.createElement('div')
    
    aux.textContent = dados.state

    div2.classList.add('header')
    div2.appendChild(aux)

    aux = document.createElement('h2')
    aux.textContent = `Casos: ${dados.cases}`

    div2.appendChild(aux)

    aux = document.createElement('h2')
    aux.textContent = `Mortes: ${dados.deaths}`

    div2.appendChild(aux)
    div2.appendChild(aux)

    div.classList.add('main')
    div.appendChild(div2)
    
    aux = div

    div = document.createElement('div')
    div.classList.add('container')
    div.appendChild(aux)

    casos.innerText = ""
    casos.appendChild(div)
}

async function Pesquisa () {
    
    if (!validacep()) return false

    let cep = document.getElementById('cep').value.replace('-','')
    
    let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let dados = await resposta.json()
    
    if (dados.erro == 'true') {
        document.getElementById('cep').classList.add('errorInput')
        document.getElementById('casos').innerText = ""
        return false
    }

    resposta = await 
    fetch(`https://covid19-brazil-api.vercel.app/api/report/v1/brazil/uf/${dados.uf}`)
    dados = await resposta.json()

    mostradados(dados)
}