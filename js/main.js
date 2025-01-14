function main() {
  'use strict';



  // Mostrar/ocultar o botão de voltar ao topo
  window.addEventListener('scroll', () => {
      const backToTopButton = document.querySelector('.back-to-top');
      if (window.scrollY > 300) {
          backToTopButton.classList.add('show');
      } else {
          backToTopButton.classList.remove('show');
      }
  });


  // Filtro Isotope para o portfólio
  $(window).on('load', function() {
      const $container = $('.portfolio-items');
      
      $container.isotope({
          filter: '*',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
      });

      $('.cat a').click(function(event) {
          event.preventDefault();
          
          $('.cat .active').removeClass('active');
          $(this).addClass('active');
          
          const selector = $(this).attr('data-filter');
          $container.isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false
              }
          });
      });
  });

  // Nivo Lightbox
  $('.portfolio-item a').nivoLightbox({
      effect: 'slideDown',
      keyboardNav: true
  });
}

// Executa a função principal
main();
