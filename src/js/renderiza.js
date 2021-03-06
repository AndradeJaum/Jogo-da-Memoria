import { carregaFotos } from "./carrega.js"
import { shuffleArray } from "./embaralha.js"
import { cartas } from "./jogo.js"
import { clicar } from "./jogo.js"

export async function renderiza() {
    const galeriaServer = await carregaFotos()

    const galeriaDuplicada = [...galeriaServer, ...galeriaServer]

    const galeriaRandomizada = shuffleArray(galeriaDuplicada)

    cartas.forEach((carta, i) => {
        const imagem = `<img src="${galeriaRandomizada[i].foto}">`
        carta.addEventListener('click', () => clicar(carta))
        carta.dataset.id = galeriaRandomizada[i].id
        carta.innerHTML = imagem;
    })
}