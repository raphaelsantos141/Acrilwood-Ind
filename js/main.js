function main() {
    'use strict';
  
    // Filtro por tipo e segmento
    function applyFilters() {
      const selectedTypes = Array.from(document.querySelectorAll('.filter-type.active')).map(el => el.getAttribute('data-value'));
      const selectedSegments = Array.from(document.querySelectorAll('.filter-segment.active')).map(el => el.getAttribute('data-value'));
  
      filteredItems = galleryItems.filter(item => {
        const matchesType = selectedTypes.length === 0 || selectedTypes.some(type => item.types.includes(type));
        const matchesSegment = selectedSegments.length === 0 || selectedSegments.some(segment => item.segments.includes(segment));
        return matchesType && matchesSegment;
      });
  
      currentPage = 1;
      renderGallery(filteredItems);
    }
  
    // Adiciona eventos aos botões
    document.querySelectorAll('.filter-type, .filter-segment').forEach(el => {
      el.addEventListener('click', function() {
        this.classList.toggle('active');
        applyFilters();
      });
    });
  
    // Limpa os filtros
    document.getElementById('clear-filters').addEventListener('click', () => {
      document.querySelectorAll('.filter-type, .filter-segment').forEach(el => el.classList.remove('active'));
      filteredItems = galleryItems;
      renderGallery(filteredItems);
    });
  
    // Renderiza a galeria inicial
    renderGallery(galleryItems);  // Chama a função para renderizar os itens ao carregar a página
  }
  
  const galleryItems = [

      { id: 1, image: '../img/portfolio/01-bd-transparente-large.jpg', types: ['baldes'], segments: ['injetados'] },
      { id: 2, image: '../img/portfolio/02-bd-rosa-large.jpg', types: ['baldes'], segments: ['injetados'] },
      { id: 3, image: '../img/portfolio/03-bj-bacardi-large.jpg', types: ['bandejas'], segments: ['bebidas'] },
      { id: 108, image: '../img/portfolio/108-portaretrato.jpg', types: ['decor'], segments: ['outros'] },
      { id: 110, image: '../img/portfolio/110-vasoflores.jpg', types: ['decor'], segments: ['outros'] },  
      { id: 109, image: '../img/portfolio/109-balde-bandeja-cafe.jpg', types: ['balde','decor'], segments: ['outros'] },
      { id: 105, image: '../img/portfolio/105-moldura-acrilwood.jpg', types: ['decor'], segments: ['outros'] },
      { id: 106, image: '../img/portfolio/106-moldura-acrilwood-certificado.jpg', types: ['decor'], segments: ['outros'] },
      { id: 4, image: '../img/portfolio/04-bj-oldeight-large.jpg', types: ['bandejas'], segments: ['bebidas'] },
      { id: 5, image: '../img/portfolio/05-db-lequehorizontal-large.jpg', types: ['display_balcao'], segments: ['papelaria'] },
      { id: 6, image: '../img/portfolio/06-db-duplafacemontecarlo-large.jpg', types: ['display_balcao'], segments: ['relogios'] },
      { id: 7, image: '../img/portfolio/07-dc-chaocrown-large.jpg', types: ['display_chao'], segments: ['papelaria'] },
      { id: 8, image: '../img/portfolio/08-dc-chaocompactor-large.jpg', types: ['display_chao'], segments: ['papelaria'] },
      { id: 9, image: '../img/portfolio/09-dg-gondolapureshower-large.jpg', types: ['display_gondola'], segments: ['cosmeticos'] },
      { id: 10, image: '../img/portfolio/10-dg-gondolaaperol-large.jpg', types: ['display_gondola'], segments: ['bebidas'] },
      { id: 11, image: '../img/portfolio/11-dv-displayvitrinesony-large.jpg', types: ['display_vitrine'], segments: ['eletronicos'] },
      { id: 12, image: '../img/portfolio/12-dv-glorificadortechnos-large.jpg', types: ['display_vitrine'], segments: ['relogios'] },
      { id: 13, image: '../img/portfolio/13-dl-absolutluminoso-large.jpg', types: ['display_luminoso'], segments: ['bebidas'] },
      { id: 14, image: '../img/portfolio/14-dl-rustyluminoso-large.jpg', types: ['display_luminoso'], segments: ['outros'] },
      { id: 15, image: '../img/portfolio/15-tf-chillibeanstrofeu-large.jpg', types: ['trofeu'], segments: ['cosmeticos'] },
      { id: 16, image: '../img/portfolio/16-tf-mitsubishimedalha-large.jpg', types: ['trofeu'], segments: ['com_visual'] },
      { id: 17, image: '../img/portfolio/17-ad-adesivos1.png', types: ['adesivos'], segments: ['com_visual'] },
      { id: 18, image: '../img/portfolio/18-ad-adesivosmizotakoyaki.png', types: ['adesivos'], segments: ['com_visual'] },
      { id: 19, image: '../img/portfolio/19-bd-BaldeHeineken.png', types: ['baldes'], segments: ['injetados'] },
      { id: 20, image: '../img/portfolio/20-bd-tonica.png', types: ['baldes'], segments: ['injetados'] },
      { id: 21, image: '../img/portfolio/21-bd-baldedegelogourmet.png', types: ['baldes'], segments: ['injetados'] },
      { id: 22, image: '../img/portfolio/22-bd-baldegelo1litros.png', types: ['baldes'], segments: ['injetados'] },
      { id: 23, image: '../img/portfolio/23-bd-baldeskyvodka.png', types: ['baldes'], segments: ['injetados'] },
      { id: 24, image: '../img/portfolio/24-bj-bandejaredonda.png', types: ['bandejas'], segments: ['injetados'] },
      { id: 25, image: '../img/portfolio/25-bj-bandejanatunobilis.png', types: ['bandejas'], segments: ['bebidas'] },
      { id: 26, image: '../img/portfolio/26-bj-bandejaamstel.png', types: ['bandejas'], segments: ['bebidas'] },
      { id: 27, image: '../img/portfolio/27-bjp-bandejaespolon.png', types: ['bandejas'], segments: ['bebidas'] },
      { id: 28, image: '../img/portfolio/28-bjp-bandejajapafood.png', types: ['bandejas'], segments: ['alimenticio'] },
      { id: 29, image: '../img/portfolio/29-bnd-blaze.png', types: ['brindes'], segments: ['outros'] },
      { id: 30, image: '../img/portfolio/30-bnd-brindereserva.png', types: ['brindes'], segments: ['outros'] },
      { id: 31, image: '../img/portfolio/31-cross-jameson e ballantines.png', types: ['clipstrip'], segments: ['bebidas'] },
      { id: 32, image: '../img/portfolio/32-cross-delicia.png', types: ['clipstrip'], segments: ['alimenticio'] },
      { id: 33, image: '../img/portfolio/33-projetoespecial-BEI.png', types: ['projetosespeciais'], segments: ['com_visual'] },
      { id: 34, image: '../img/portfolio/34-projetosepeciais-arvoreteachers.png', types: ['projetosespeciais'], segments: ['bebidas'] },
      { id: 36, image: '../img/portfolio/36-decor-gtavi.png', types: ['decor'], segments: ['outros'] },
      { id: 37, image: '../img/portfolio/37-dm-tabletent.png', types: ['display_mesa'], segments: ['bebidas'] },
      { id: 38, image: '../img/portfolio/38-dm-tabletentabsolut.png', types: ['display_mesa'], segments: ['bebidas'] },
      { id: 39, image: '../img/portfolio/39-dp-tegma.png', types: ['display_parede'], segments: ['outros'] },
      { id: 40, image: '../img/portfolio/40-dp-bacardi.png', types: ['display_parede','display_luminoso'], segments: ['bebidas'] },
      { id: 41, image: '../img/portfolio/41-dv-mormaii.png', types: ['display_vitrine'], segments: ['oculos'] },
      { id: 42, image: '../img/portfolio/42-dv-colcci.png', types: ['display_vitrine'], segments: ['oculos'] },
      { id: 43, image: '../img/portfolio/43-gf-glorifiers.png', types: ['glorifier'], segments: ['bebidas'] },
      { id: 44, image: '../img/portfolio/44-gf-wyborowa.png', types: ['glorifier'], segments: ['bebidas'] },
      { id: 45, image: '../img/portfolio/45-lt-LetrasReserva.png', types: ['logotipoaltorelevo'], segments: ['com_visual'] },
      { id: 46, image: '../img/portfolio/46-lt-letrasache.png', types: ['logotipoaltorelevo'], segments: ['com_visual'] },
      { id: 47, image: '../img/portfolio/47-ln-lona1.png', types: ['lona'], segments: ['com_visual'] },
      { id: 48, image: '../img/portfolio/48-ln-lona2.png', types: ['lona'], segments: ['com_visual'] },
      { id: 49, image: '../img/portfolio/49-pt-wps.png', types: ['pecatecnica'], segments: ['outros'] },
      { id: 50, image: '../img/portfolio/50-pt-grw.png', types: ['pecatecnica'], segments: ['outros'] },
      { id: 51, image: '../img/portfolio/51-q-quiosquerevlon.png', types: ['quiosque','display_chao'], segments: ['cosmeticos'] },
      { id: 52, image: '../img/portfolio/52-q-quiosquechillibeans.png', types: ['quiosque'], segments: ['oculos'] },
      { id: 53, image: '../img/portfolio/53-tt-torregiratoriatechnos.png', types: ['totem'], segments: ['relogios'] },
      { id: 54, image: '../img/portfolio/54-tt-crown.png', types: ['totem'], segments: ['papelaria'] },
      { id: 55, image: '../img/portfolio/55-ltn-victorefrancisco.png', types: ['neon'], segments: ['outros'] },
      { id: 56, image: '../img/portfolio/56-ltn-pablomarcal.png', types: ['neon'], segments: ['outros'] },
      { id: 57, image: '../img/portfolio/57-ltn-patacho.png', types: ['neon'], segments: ['outros'] },
      { id: 58, image: '../img/portfolio/58-db-raquete-live.png', types: ['display_balcao'], segments: ['outros'] },
      { id: 59, image: '../img/portfolio/59-db-alcool-gel.png', types: ['display_balcao'], segments: ['outros'] },
      { id: 60, image: '../img/portfolio/60-dv-display-vitrine-garmin.png', types: ['display_vitrine'], segments: ['relogios'] },
      { id: 61, image: '../img/portfolio/61-dc-expositor-prancha-oculos.png', types: ['display_chao'], segments: ['oculos'] },
      { id: 62, image: '../img/portfolio/62-dc-expositor-alumbra-vivax.png', types: ['display_chao'], segments: ['eletronicos'] },
      { id: 63, image: '../img/portfolio/63-db-display-lapiseira.png', types: ['display_balcao'], segments: ['papelaria'] },   
      { id: 64, image: '../img/portfolio/64-bandeja_retangular.jpg', types: ['bandejas'], segments: ['outros'] },  
      { id: 65, image: '../img/portfolio/65-bandeja_com_alca_de_couro_decorativa_grande.jpg', types: ['bandejas'], segments: ['outros'] },  
      { id: 66, image: '../img/portfolio/66-bandeja_chanfrada.jpg', types: ['bandejas','decor'], segments: ['outros'] },  
      { id: 67, image: '../img/portfolio/67-painel-de-preço-frescatto.jpg', types: ['bannercilhos'], segments: ['alimenticio'] }, 
      { id: 68, image: '../img/portfolio/68-3baldes.jpg', types: ['brindes', 'baldes'], segments: ['injetados'] }, 
      { id: 69, image: '../img/portfolio/69-placafaith.jpg', types: ['decor'], segments: ['outros'] }, 
      { id: 70, image: '../img/portfolio/70-baldes3.jpg', types: ['baldes'], segments: ['injetados'] }, 
      { id: 71, image: '../img/portfolio/71-porta-celular-jadlog.jpg', types: ['brindes'], segments: ['outros'] },
      { id: 72, image: '../img/portfolio/72-display-l-pix.jpg', types: ['display_balcao'], segments: ['com_visual'] }, 
      { id: 73, image: '../img/portfolio/73-placa-proibido.jpg', types: ['display_balcao'], segments: ['com_visual'] },
      { id: 74, image: '../img/portfolio/74-brinde-licor.jpg', types: ['brindes'], segments: ['bebidas'] },
      { id: 75, image: '../img/portfolio/75-somoseva.jpg', types: ['brindes'], segments: ['cosmeticos'] }, 
      { id: 76, image: '../img/portfolio/76-ballantines.jpg', types: ['brindes'], segments: ['bebidas'] },  
      { id: 77, image: '../img/portfolio/77-xadrez.jpg', types: ['decor'], segments: ['outros'] }, 
      { id: 78, image: '../img/portfolio/78-trofeu-mitsubishi.jpg', types: ['trofeu'], segments: ['com_visual'] },  
      { id: 79, image: '../img/portfolio/79-trofeu-greenbelt.jpg', types: ['trofeu'], segments: ['com_visual'] }, 
      { id: 80, image: '../img/portfolio/80-trofeu-jogos-regionais.jpg', types: ['trofeu'], segments: ['com_visual'] }, 
      { id: 81, image: '../img/portfolio/81-trofeu-premio-excelencia.jpg', types: ['trofeu'], segments: ['com_visual'] }, 
      { id: 82, image: '../img/portfolio/82-trofeu-leite-organico.jpg', types: ['trofeu'], segments: ['com_visual', 'alimenticio'] },   
      { id: 83, image: '../img/portfolio/83-trofeu-green-belts.jpg', types: ['trofeu'], segments: ['com_visual'] }, 
      { id: 84, image: '../img/portfolio/84-trofeu-nestle.jpg', types: ['trofeu'], segments: ['alimenticio'] },
      { id: 85, image: '../img/portfolio/85-letreiro-cacau-show.jpg', types: ['logotipoaltorelevo'], segments: ['alimenticio'] }, 
      { id: 86, image: '../img/portfolio/86-haribo-job.jpg', types: ['display_balcao'], segments: ['papelaria'] },  
      { id: 87, image: '../img/portfolio/87-sainte-lys-balcão.jpg', types: ['display_balcao'], segments: ['cosmeticos'] }, 
      { id: 88, image: '../img/portfolio/88-display-chao-nables.jpg', types: ['display_chao'], segments: ['outros'] },
      { id: 89, image: '../img/portfolio/89-display-vitrine-crown.jpg', types: ['display_vitrine'], segments: ['papelaria'] },  
      { id: 90, image: '../img/portfolio/90-display-vitrine-condor.jpg', types: ['display_vitrine'], segments: ['relogios'] }, 
      { id: 91, image: '../img/portfolio/91-display-chao-carbon14.jpg', types: ['display_chao'], segments: ['relogios'] }, 
      { id: 92, image: '../img/portfolio/92-display-chao-victorinox.jpg', types: ['display_chao'], segments: ['relogios'] }, 
      { id: 93, image: '../img/portfolio/93-DISPENSER-PARA-ÁLCOOL-GEL-COM-PEDAL.jpg', types: ['display_chao'], segments: ['outros'] }, 
      { id: 94, image: '../img/portfolio/94-clip-strip-hellmans.jpg', types: ['clipstrip'], segments: ['alimenticio'] }, 
      { id: 95, image: '../img/portfolio/95-especial-WYBOROWA.jpg', types: ['projetosespeciais'], segments: ['bebidas'] }, 
      { id: 96, image: '../img/portfolio/96-mesa-natu-nobilis.jpg', types: ['display_mesa'], segments: ['bebidas'] }, 
      { id: 97, image: '../img/portfolio/97-mesa-nova-schin.jpg', types: ['display_mesa'], segments: ['bebidas'] },  
      { id: 98, image: '../img/portfolio/98-mesa-ice-tea.jpg', types: ['display_mesa'], segments: ['bebidas'] },  
      { id: 99, image: '../img/portfolio/99-mesa-brahma.jpg', types: ['display_mesa'], segments: ['bebidas'] },
      { id: 100, image: '../img/portfolio/100-mesa-ballantines.jpg', types: ['display_mesa'], segments: ['bebidas'] }, 
      { id: 101, image: '../img/portfolio/101-mesa-nova-schin-madeira.jpg', types: ['display_mesa'], segments: ['bebidas'] },  
      { id: 102, image: '../img/portfolio/102-mesa-vono.jpg', types: ['display_mesa'], segments: ['alimenticio'] }, 
      { id: 103, image: '../img/portfolio/103-luminoso-bohemia.jpg', types: ['display_luminoso'], segments: ['bebidas'] }, 
      { id: 104, image: '../img/portfolio/104-decoracao-crashbandicoot.jpg', types: ['decor'], segments: ['outros'] }, 
      { id: 107, image: '../img/portfolio/107-chaveiro-nfsmw.jpg', types: ['decor'], segments: ['outros'] },  
      { id: 35, image: '../img/portfolio/35-decor-ghostbusters.png', types: ['decor'], segments: ['outros'] },

     
  ];
  
  const itemsPerPage = 9;
  let currentPage = 1;
  let filteredItems = galleryItems;
  
  // Renderiza a galeria
  function renderGallery(items, page = 1) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleItems = items.slice(startIndex, endIndex);
  
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
  
    visibleItems.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('gallery-item');
      div.innerHTML = `<img src="${item.image}" alt="Image ${item.id}">`;
      gallery.appendChild(div);
    });
  
    renderPagination(items);
  }
  
  // Renderiza a paginação
  function renderPagination(items) {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(items.length / itemsPerPage);
    pagination.innerHTML = '';
  
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      if (i === currentPage) {
        button.classList.add('active');
      }
      button.onclick = () => {
        currentPage = i;
        renderGallery(items, i);
      };
      pagination.appendChild(button);
    }
  }
  
  // Inicializa a galeria
  main();

  // Função para abrir o modal com a imagem clicada
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImage.src = imageSrc;
  
    // Desativa o scroll da página
    document.body.classList.add('body-no-scroll');
  }
  
  // Função para fechar o modal
  function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
  
    // Reativa o scroll da página
    document.body.classList.remove('body-no-scroll');
  }
  
  // Adiciona eventos às imagens da galeria para abrir o modal ao clicar
  document.getElementById('gallery').addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
      openModal(e.target.src);
    }
  });
  
  // Fecha o modal ao clicar no botão de fechar
  document.querySelector('.close').addEventListener('click', closeModal);
  
  // Fecha o modal ao clicar fora da imagem
  window.addEventListener('click', function(e) {
    const modal = document.getElementById('imageModal');
    if (e.target === modal) {
      closeModal();
    }
  });
  
 