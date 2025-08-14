function mostrarSecao(id) {
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(secao => secao.style.display = 'none');

  const ativa = document.getElementById(id);
  if (ativa) ativa.style.display = 'block';

  if (id === 'emocional') {
    carregarDiario();
  }
}

function salvarDiario() {
  const texto = document.getElementById("diario").value;
  localStorage.setItem("diarioEmocional", texto);
  carregarDiario();
}

function limparDiario() {
  document.getElementById("diario").value = "";
  localStorage.removeItem("diarioEmocional");
  document.getElementById("texto-salvo").innerHTML = "";
}

function carregarDiario() {
  const textoSalvo = localStorage.getItem("diarioEmocional");
  if (textoSalvo) {
    document.getElementById("texto-salvo").innerHTML =
      `<h4>📝 Último registro:</h4><p>${textoSalvo}</p>`;
  }
}
