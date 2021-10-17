import { carregaRecords, enviaRecords } from "./carrega.js"

const divRecords = document.querySelector('.record')

export function records(pontuacao) {
    const titulo = document.querySelector('.record__titulo')
    titulo.innerText = ` Você terminou em ${pontuacao} jogadas`

    divRecords.classList.remove("hide")
    listaRecords()
    adicionar(pontuacao)
}
async function listaRecords() {
    const records = await carregaRecords()
    const lista = document.querySelector('.record__lista')
    const tabela = document.querySelector('.tabela')
    let tr = document.createElement("tr")
    
    records.forEach((record) => {
        tr = `<td> ${record.nome} </td> 
        <td> ${record.pontuacao}</td>`
        tabela.innerHTML += tr
    })
}

function adicionar(pontuacao) {
    
    const nomeinput = document.getElementById("input")
    console.log(nomeinput)
    const nome = nomeinput.value
    const adicionar = document.querySelector('.record__botao')
    

    adicionar.addEventListener("click", () => {
        enviaRecords(nome, pontuacao)
        console.log(nome)
    })
}
