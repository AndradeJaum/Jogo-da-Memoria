export function carregaFotos() {
    return fetch('http://localhost:3000/cards')
        .then(resposta => resposta.json())
}