import { carregaRecords, enviaRecords } from "./carrega.js"

const divRecords = document.querySelector('.record')

export function records(pontuacao) {
    const titulo = document.querySelector('.record__titulo')
    titulo.innerText = `Você terminou em ${pontuacao} jogadas`

    divRecords.classList.remove("hide")
    listaRecords()
    adicionar(pontuacao)
}
export async function listaRecords() {
    const records = await carregaRecords()
    const tabela = document.querySelector('.tabela')
    let tr = document.createElement("tr")
    records.forEach((record) => {
        tr = `<td> ${record.nome} </td> 
        <td> ${record.pontuacao}</td>`
        tabela.innerHTML += tr
    })
}
function adicionar(pontuacao) {
    const adicionar = document.querySelector('.record__botao')

    adicionar.addEventListener("click", (evento) => {
        evento.preventDefault()

        const nomeinput = document.getElementById("input")
        const nome = nomeinput.value
        enviaRecords(nome, pontuacao)
    })
}
