// ==========================================================================
// AXIS - MAIN JS ENTRY POINT
// ==========================================================================
import "../sass/main.scss";

// --------------------------------------------------------------------------
// 1. Vendor (Libs / Imports)
// --------------------------------------------------------------------------
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Keyboard, Pagination } from "swiper/modules";

// --------------------------------------------------------------------------
// 2. Swiper Carousels
// --------------------------------------------------------------------------
const initServicesSwiper = () => {
  const swiperElement = document.querySelector(".services-swiper");

  // Trava de segurança: se não achar o carrossel na página, nem tenta rodar
  if (!swiperElement) return;

  new Swiper(".services-swiper", {
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
      paginationBulletMessage: "Ir para o próximo card {{index}}",
    },
    breakpoints: {
      320: { slidesPerView: 1.3 },
      350: { slidesPerView: 1.4 },
      370: { slidesPerView: 1.5 },
      390: { slidesPerView: 1.6 },
      410: { slidesPerView: 2 },
      430: { slidesPerView: 2.2 },
      450: { slidesPerView: 2.3 },
      470: { slidesPerView: 2.4 },
      490: { slidesPerView: 2.5 },
      510: { slidesPerView: 2.6 },
      530: { slidesPerView: 2.7 },
      550: { slidesPerView: 2.8 },
      570: { slidesPerView: 2.9 },
      590: { slidesPerView: 3 },
    },
  });
};

// --------------------------------------------------------------------------
// 3. Initialize
// --------------------------------------------------------------------------
// Só dispara as funções quando o HTML terminar de carregar
document.addEventListener("DOMContentLoaded", () => {
  initServicesSwiper();
});
