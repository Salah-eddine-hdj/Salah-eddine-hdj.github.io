    document.addEventListener('DOMContentLoaded', () => {
      
      new Swiper('.project-images-slider', {
        loop: true,
        speed: 600,
        autoplay: {
          delay: 3000, 
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

      // Initialisation du carrousel PRINCIPAL (qui contient les projets)
      new Swiper('.portfolio-main-slider', {
        speed: 600,
        loop: false, 
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination-fraction',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        watchOverflow: true,
      });

      const infoButtons = document.querySelectorAll('.btn-show-details');
      infoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
          e.preventDefault(); 
          const slideItem = this.closest('.portfolio-slide-item');
          const allSlides = document.querySelectorAll('.portfolio-slide-item');
          allSlides.forEach(s => {
            if (s !== slideItem) {
              s.classList.remove('details-visible');
            }
          });
          if (slideItem) {
            slideItem.classList.toggle('details-visible');
          }
        });
      });

      const hideButtons = document.querySelectorAll('.btn-hide-details');
      hideButtons.forEach(button => {
        button.addEventListener('click', function(e) {
          e.preventDefault(); 
          const slideItem = this.closest('.portfolio-slide-item');
          if (slideItem) {
            slideItem.classList.remove('details-visible');
          }
        });
      });
      const lightbox = GLightbox({
        selector: '.glightbox',  
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
      });

    });