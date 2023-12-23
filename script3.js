function redirecionarPagina() {
    window.location.href = 'index.html';
}

const botao_dark_mode = document.querySelector('#botao-dark-mode');
const corpo = document.querySelector('body');
const header_dark_mode = document.querySelector('header')
const header_Elemento = document.querySelector('.header-Elemento')
const header_elemento2 = document.querySelector('#header_elemento2')
const header_elemento3 = document.querySelector('#header_elemento3')
const header_elemento4 = document.querySelector('#header_elemento4')
const header_elemento5 = document.querySelector('#header_elemento5')
const container_specs_carro = document.querySelector('#container-specs-carro')
const botao_voltar_começo_link = document.querySelector('.botao-voltar-começo-link')
const botao_voltar_começo_link2 = document.querySelector('#botao-voltar-começo-link2')

botao_dark_mode.onclick = function()
{
    this.classList.toggle('active')
    corpo.classList.toggle('active')
    header_dark_mode.classList.toggle('active')
    header_Elemento.classList.toggle('active')
    header_elemento2.classList.toggle('active')
    header_elemento3.classList.toggle('active')
    header_elemento4.classList.toggle('active')
    header_elemento5.classList.toggle('active')
    container_specs_carro.classList.toggle('active')
    botao_voltar_começo_link.classList.toggle('active')
    botao_voltar_começo_link2.classList.toggle('active')
}