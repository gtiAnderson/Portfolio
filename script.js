
function escrevendoLetra() {
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((Letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += Letra;
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.digitando');
    if (titulo) {
        ativaLetra(titulo); // Movido para dentro de escrevendoLetra
    }
}

// Alteração: Adiciona um evento para chamar escrevendoLetra quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', escrevendoLetra);

const ativaMenu = document.querySelector('.fa-bars');
if (ativaMenu) {
    ativaMenu.addEventListener('click', () => {
        ativaMenu.classList.toggle('fa-x');
    });
}
