// Espera a que cargue toda la página
document.addEventListener('DOMContentLoaded', function () {

  // Selecciona las tarjetas de proyectos y skills
  const elementos = document.querySelectorAll('.project-card, .skill-card');

  // Crea el observador — detecta cuando un elemento entra a la pantalla
  const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada, i) {
      if (entrada.isIntersecting) {

        // Aparece con un pequeño retraso entre cada tarjeta
        setTimeout(function () {
          entrada.target.classList.add('visible');

          // Si es una skill, anima la barra de progreso
          const barra = entrada.target.querySelector('.skill-fill');
          if (barra) {
            const nivel = entrada.target.dataset.level || 0;
            barra.style.width = nivel + '%';
          }

        }, i * 80);

        // Deja de observar ese elemento — ya apareció
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });

  // Le dice al observador qué elementos vigilar
  elementos.forEach(function (el) {
    observador.observe(el);
  });

});