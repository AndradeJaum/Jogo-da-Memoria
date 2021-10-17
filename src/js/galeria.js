import { renderiza } from "./renderiza.js";
import { shuffleArray } from "./embaralha.js";
import { records } from "./records.js";

export const cartas = document.querySelectorAll('.fotos');

const jogadas = document.getElementById('jogadas')

let cartasEscolhidas = []
let travaCarta = false;
var pontuacao = 0;
var acertos = 9;

export function clicar(carta) {
    if (travaCarta || carta.classList.contains('foto-escolhida')) return
    console.log(carta.classList)
    carta.classList.toggle('foto-escolhida');
    cartasEscolhidas.push(carta)

    if (cartasEscolhidas.length == 2) {
        //Contados de jogadas
        pontuacao = pontuacao +1;
        jogadas.classList.add('jogadasRealizadas')
        jogadas.innerText = `Jogadas = ${pontuacao}`
        // Trava o click ao escolher 2
        if (cartasEscolhidas[0].dataset.id == cartasEscolhidas[1].dataset.id) {
            
            setTimeout(() => {
                cartasEscolhidas[0].style.opacity = '0'
                cartasEscolhidas[1].style.opacity = '0'
                cartasEscolhidas.length = 0
                travaCarta = false;
                acertos ++
                if (acertos == 10) {
                    records(pontuacao)
                }
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