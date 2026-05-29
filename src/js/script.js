// ==========================================================================
// AXIS — MAIN JS ENTRY POINT
// ==========================================================================
import "../sass/main.scss";

// --------------------------------------------------------------------------
// Vendor (Libs / Imports)
// --------------------------------------------------------------------------
import { inject } from "@vercel/analytics";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Keyboard, Pagination } from "swiper/modules";

// Inicializa o rastreamento da Vercel
inject();

// --------------------------------------------------------------------------
// Swiper Carousels
// --------------------------------------------------------------------------
const initServicesSwiper = () => {
  const swiperElement = document.querySelector(".services-swiper");

  // Trava de segurança: se não achar o carrossel na página, nem tenta rodar
  if (!swiperElement) return;

  new Swiper(swiperElement, {
    modules: [Pagination, A11y, Keyboard],
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: false,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    a11y: {
      enabled: true,
      prevSlideMessage: "Card de serviço anterior",
      nextSlideMessage: "Próximo card de serviço",
      paginationBulletMessage: "Ir para o card de serviço {{index}}",
    },
    breakpoints: {
      320: { slidesPerView: 1.3 },
      400: { slidesPerView: 1.8 },
      500: { slidesPerView: 2.4 },
      590: { slidesPerView: 3 },
    },
  });
};

// --------------------------------------------------------------------------
// Initialize
// --------------------------------------------------------------------------
// Só dispara as funções quando o HTML terminar de carregar
document.addEventListener("DOMContentLoaded", () => {
  initServicesSwiper();
});
