const menu = document.getElementById("navMenu");
const toggleButton = document.querySelector(".menu-toggle");

function toggleMenu() {
  // Alterna classe
  menu.classList.toggle("ativo");

  // Alterna atributo de acessibilidade
  const expanded = toggleButton.getAttribute("aria-expanded") === "true";
  toggleButton.setAttribute("aria-expanded", !expanded);

  // Alterna exibição manual caso necessário
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

// Fechar o menu ao clicar fora dele
document.addEventListener("click", function (event) {
  const isClickInside =
    menu.contains(event.target) || toggleButton.contains(event.target);

  if (!isClickInside) {
    menu.style.display = "none";
  }
});

// Fecha o menu ao clicar em um item dele
const links = menu.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.style.display = "none";
  });
});

//Botão simplificado para abrir o menu em dispositivos móveis
function atualizarToggleBtn() {
  if (window.innerWidth <= 800) {
    toggleButton.textContent = "☰";
  } else {
    toggleButton.textContent = "☰ MENU";
  }
}

atualizarToggleBtn();
window.addEventListener("resize", atualizarToggleBtn);

//Mensagem do formulário
const formulario = document.getElementById("formulario-contato");
const mensagem = document.getElementById("mensagem-obrigado");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const dados = new FormData(formulario);

  fetch(formulario.action, {
    method: "POST",
    body: dados,
  })
    .then(() => {
      formulario.style.display = "none";
      mensagem.style.display = "block";
    })
    .catch((error) => {
      alert("Houve um erro ao enviar. Tente novamente.");
      console.error(error);
    });
});

// Quando a página for carregada, altere a URL para a raiz '/'
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname !== "/") {
    window.history.pushState({}, document.title, "/");
  }
});


  