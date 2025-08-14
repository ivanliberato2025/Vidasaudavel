function mostrarSecao(id) {
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(secao => secao.style.display = 'none');

  const ativa = document.getElementById(id);
  if (ativa) {
    ativa.style.display = 'block';
    window.scrollTo({ top: ativa.offsetTop, behavior: 'smooth' });
  }
}

// Mostrar a primeira seção ao carregar
window.onload = () => {
  mostrarSecao('emocional');
};
