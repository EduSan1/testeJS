// var nome="Jorge"
// console.log(nome)
// nome = 123
// console.log(nome)

// let nota = 8

// if (nota =>5){
//     let mensagem = 'aprovado';
// } else {
//     let mensagem = 'reprovado';
// }

// console.log(mensagem);

const titulo = document.getElementById('titulo');
const nome = document.getElementById('nome');
const ok = document.getElementById('ok');

function trocarTituloRed() {
    titulo.textContent = nome.value;
    titulo.className = "";
    titulo.classList.add('vermelho');
}
function trocarTituloGreen() {
    titulo.textContent = nome.value;
    titulo.className = "";
    titulo.classList.add('verde');
}
function trocarTituloBlue() {
    titulo.textContent = nome.value;
    titulo.className = "";
    titulo.classList.add('azul');
}

vermelho.addEventListener('click', trocarTituloRed)
verde.addEventListener('click', trocarTituloGreen)
azul.addEventListener('click', trocarTituloBlue)