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
    { id: 1, image: 'https://via.placeholder.com/300x200?text=Produto+1', types: ['Tipo1'], segments: ['Segmento1'] },
    { id: 2, image: 'https://via.placeholder.com/300x200?text=Produto+2', types: ['Tipo1', 'Tipo2'], segments: ['Segmento2'] },
    { id: 3, image: 'https://via.placeholder.com/300x200?text=Produto+3', types: ['Tipo2'], segments: ['Segmento1', 'Segmento2'] },
    { id: 4, image: 'https://via.placeholder.com/300x200?text=Produto+4', types: ['Tipo1'], segments: ['Segmento1'] },
    { id: 5, image: 'https://via.placeholder.com/300x200?text=Produto+5', types: ['Tipo2'], segments: ['Segmento2'] },
    { id: 6, image: 'https://via.placeholder.com/300x200?text=Produto+6', types: ['Tipo1', 'Tipo2'], segments: ['Segmento1'] },
    { id: 7, image: 'https://via.placeholder.com/300x200?text=Produto+7', types: ['Tipo2'], segments: ['Segmento1', 'Segmento2'] },
    { id: 8, image: 'https://via.placeholder.com/300x200?text=Produto+8', types: ['Tipo1'], segments: ['Segmento1'] },
    { id: 9, image: 'https://via.placeholder.com/300x200?text=Produto+9', types: ['Tipo1', 'Tipo2'], segments: ['Segmento2'] },
    { id: 10, image: 'https://via.placeholder.com/300x200?text=Produto+10', types: ['Tipo2'], segments: ['Segmento1'] }
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
  