// Filtra los proyectos según la categoría del botón
function filtrar(btn, cat) {

  // Quita la clase activa de todos los botones
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.remove('active');
  });

  // Pone la clase activa solo en el botón clickeado
  btn.classList.add('active');

  // Muestra u oculta cada tarjeta según su categoría
  document.querySelectorAll('.project-card').forEach(card => {
    const categorias = card.dataset.cat || '';

    if (cat === 'todos' || categorias.includes(cat)) {
      card.style.display = 'grid';
    } else {
      card.style.display = 'none';
    }
  });
}