function aumentarDiv(elemento) {
    var divsClicaveis = document.querySelectorAll('.bloco');

    
    divsClicaveis.forEach(function(div) {
        div.classList.remove('aumentar');
    });

    
    elemento.classList.add('aumentar');
}


function redirecionarPagina() {
    window.location.href = 'index3.html';
}

function redirecionarPagina2() {
    window.location.href = 'index2.html';
}