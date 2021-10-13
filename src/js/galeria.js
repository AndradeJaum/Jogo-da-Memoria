import { renderiza } from "./renderiza.js";
import { shuffleArray } from "./embaralha.js";

export const cartas = document.querySelectorAll('.fotos');
// Recebe as fotos do servidor

let cartasEscolhidas = []
let travaCarta = false;

export function clicar(carta) {
    if (travaCarta || carta.classList.contains('foto-escolhida')) return
    console.log(carta.classList)
    carta.classList.toggle('foto-escolhida');
    cartasEscolhidas.push(carta)

    if (cartasEscolhidas.length == 2) {

        if (cartasEscolhidas[0].dataset.id == cartasEscolhidas[1].dataset.id) {

            setTimeout(() => {
                cartasEscolhidas[0].style.opacity = '0'
                cartasEscolhidas[1].style.opacity = '0'
                cartasEscolhidas.length = 0
                travaCarta = false;
            }, 1000)
        }
        travaCarta = true;
        setTimeout(() => {
            cartasEscolhidas[0].classList.toggle('foto-escolhida')
            cartasEscolhidas[1].classList.toggle('foto-escolhida')
            cartasEscolhidas.length = 0
            travaCarta = false;
        }, 1000)
    }
}