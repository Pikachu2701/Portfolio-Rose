document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      let loader = document.querySelector('.loader');
      let loaderPosition = loader.getBoundingClientRect().top;
      let screenPosition = window.innerHeight;
  
      if (loaderPosition < screenPosition) {
        loader.classList.add('loader-scroll'); // Adiciona a classe quando o loader entra na área visível
      }
    });
  });
  