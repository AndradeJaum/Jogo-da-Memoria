export function carregaFotos() {
    return fetch('http://localhost:3000/cards')
        .then(resposta => resposta.json())
}

export function carregaRecords() {
    return fetch('http://localhost:3000/records')
        .then(resposta => resposta.json())
}
export function enviaRecords(nome, pontuacao) {
    fetch("http://localhost:3000/records", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ nome: nome, pontuacao: pontuacao })
    })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
}