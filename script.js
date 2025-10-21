// Sistema de Navegação de Slides
let currentSlide = 1;
const totalSlides = 38;

// Elementos DOM
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideIndicator = document.getElementById("slideIndicator");

// Mostrar slide específico
function showSlide(n) {
  // Remove classe active de todos os slides
  slides.forEach((slide) => slide.classList.remove("active"));

  // Verificação de limites
  if (n > totalSlides) {
    currentSlide = totalSlides;
  } else if (n < 1) {
    currentSlide = 1;
  } else {
    currentSlide = n;
  }

  // Mostra o slide alvo
  const targetSlide = document.querySelector(`[data-slide="${currentSlide}"]`);
  if (targetSlide) {
    targetSlide.classList.add("active");
  }

  // Atualiza indicador
  slideIndicator.textContent = `${currentSlide} / ${totalSlides}`;

  // Atualiza estado dos botões
  prevBtn.disabled = currentSlide === 1;
  nextBtn.disabled = currentSlide === totalSlides;

  // Rola para o topo do conteúdo
  const content = targetSlide.querySelector(".slide-content");
  if (content) {
    content.scrollTop = 0;
  }
}

// Navegar para slide anterior
function previousSlide() {
  showSlide(currentSlide - 1);
}

// Navegar para próximo slide
function nextSlide() {
  showSlide(currentSlide + 1);
}

// Event listeners dos botões
prevBtn.addEventListener("click", previousSlide);
nextBtn.addEventListener("click", nextSlide);

// Navegação por teclado
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
    case "PageUp":
      if (currentSlide > 1) {
        previousSlide();
      }
      break;
    case "ArrowRight":
    case "PageDown":
    case " ":
      if (currentSlide < totalSlides) {
        nextSlide();
      }
      e.preventDefault(); // Previne scroll da página
      break;
    case "Home":
      showSlide(1);
      break;
    case "End":
      showSlide(totalSlides);
      break;
  }
});

// Navegação por toque/swipe para mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;

  // Swipe para esquerda (próximo slide)
  if (touchEndX < touchStartX - swipeThreshold) {
    if (currentSlide < totalSlides) {
      nextSlide();
    }
  }

  // Swipe para direita (slide anterior)
  if (touchEndX > touchStartX + swipeThreshold) {
    if (currentSlide > 1) {
      previousSlide();
    }
  }
}

// Prevenir zoom de duplo toque no mobile
let lastTouchEnd = 0;
document.addEventListener(
  "touchend",
  (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  },
  false
);

// Alternar tela cheia com duplo clique
document.addEventListener("dblclick", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      console.log("Falha ao solicitar tela cheia:", err);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});

// Inicializar apresentação
window.addEventListener("load", () => {
  showSlide(1);
  console.log("✓ Apresentação carregada com sucesso");
  console.log(`✓ ${totalSlides} slides prontos`);
  console.log("✓ Use as setas ← → ou PageUp/PageDown para navegar");
  console.log("✓ Duplo clique para tela cheia");
});

// Função para obter slide atual (para debug)
window.getCurrentSlide = () => currentSlide;
