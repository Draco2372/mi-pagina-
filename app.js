const btnNo = document.getElementById('btn-no');
const btnSi = document.getElementById('btn-si');

const audioNo = new Audio('sonido-no.mp3');
const audioSi = new Audio('sonido-si.mp3');

let audioEnabled = false;

// Habilita el audio después de cualquier clic en la página
document.body.addEventListener('click', () => {
  audioEnabled = true;
});

btnNo.addEventListener('mouseenter', () => {
  const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
  const y = Math.random() * (window.innerHeight - btnNo.offsetHeight - 50) + 50;
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
  if (audioEnabled) {
    audioNo.currentTime = 0;
    audioNo.play();
  }
});

btnSi.addEventListener('click', () => {
  audioSi.currentTime = 0;
  audioSi.play();
  setTimeout(() => {
    window.location.href = "./gracias.html"; // Redirección asegurada
  }, 500);
});