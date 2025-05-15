function escrevendoLetra() {
  function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    arrTexto.forEach((Letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += Letra;
      }, 75 * i);
    });
  }

  const titulo = document.querySelector(".digitando");
  ativaLetra(titulo); // Movido para dentro de escrevendoLetra
}

escrevendoLetra();

function menuMobile() {
  const ativaMenu = document.querySelector(".fa-bars"); // Ícone do menu
  const navMenu = document.querySelector(".navegacao-primaria"); // Menu de navegação

  if (ativaMenu && navMenu) {
      // Adiciona o evento de clique no ícone do menu
      ativaMenu.addEventListener("click", () => {
          // Verifica se a largura da tela é menor que 992px (mobile)
          if (window.innerWidth <= 992) {
              ativaMenu.classList.toggle("fa-x"); // Alterna ícone (fa-bars -> fa-x)
              navMenu.classList.toggle("ativado"); // Mostra/oculta o menu
          }
      });
  } else {
      console.error("Elementos do menu mobile não encontrados.");
  }
}

menuMobile();

// Navegação suave ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});
