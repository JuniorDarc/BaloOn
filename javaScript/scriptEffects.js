// Seleciona a imagem dentro da div class "logo" que está dentro do header
const logoImg = document.querySelector('.baloon');

// Lista com o caminho das suas 3 imagens
const imagens = [
  'imagens/BaloOn/1.png',
  'imagens/BaloOn/2.png',
  'imagens/BaloOn/3.png',
  'imagens/BaloOn/4.png',
  'imagens/BaloOn/5.png',
  'imagens/BaloOn/6.png',
];

let index = 0;
let intervalo = null;

// Função que faz a troca para a próxima imagem da lista
function alternarImagem() {
  index = (index + 1) % imagens.length; // Avança o índice de 0 a 2 e reinicia
  logoImg.src = imagens[index];
}

// Quando o mouse entra na imagem
logoImg.addEventListener('mouseenter', () => {
  // Altera a cada 500 milissegundos (meio segundo). Ajuste o tempo se quiser mais rápido ou devagar.
  intervalo = setInterval(alternarImagem, 100); 
});

// Quando o mouse sai da imagem
logoImg.addEventListener('mouseleave', () => {
  clearInterval(intervalo); // Para a animação
  logoImg.src = imagens[0]; // Volta para a imagem original (balon.png)
  index = 0; // Reinicia o contador
});

document.querySelectorAll(".carta").forEach(img => {
  const original = img.dataset.original;
  const alternativa = img.dataset.alternativa;

  img.addEventListener("click", () => {
    img.src = img.src.includes(original) ? alternativa : original;
  });
});