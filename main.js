// Captura o formulário e o campo de mensagem
const formulario = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');

// Adiciona um evento de submissão ao formulário
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Obtém os valores dos campos A e B
  const campoA = document.getElementById('campoA').value;
  const campoB = document.getElementById('campoB').value;

  // Verifica se B é maior que A
  if (Number(campoB) > Number(campoA)) {
    mensagem.textContent = "O formulário é válido! B é maior que A.";
    mensagem.className = "success";
  } else {
    mensagem.textContent = "O formulário é inválido. B deve ser maior que A.";
    mensagem.className = "error";
  }
});