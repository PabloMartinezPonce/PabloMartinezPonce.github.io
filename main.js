

// Generador de corazones
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
}

setInterval(createHeart, 300);

// Modal de fotos
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('photoModal');
  const modalImg = modal.querySelector('img');
  const closeModal = document.querySelector('.close-modal');
  const images = document.querySelectorAll('#carousel img');

  images.forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modal.style.display = 'flex';
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

var percent = 0;
var countDown = 10;

var timer = setInterval(() => {
  $(".bar").css("width", percent + "%");
  percent += 1;
  if (percent % 20 == 0) {
    countDown--;
    $(".countdown").text(countDown);
  }
  if (percent > 200) {
    clearInterval(timer);
    $(".containerGift").addClass("complete");
    $(".loading").detach();
    $(".countdown").detach();
  }
}, 50);

document.addEventListener("click", function() {
  let audio = document.getElementById("miAudio");
  if (audio.paused) {
      audio.play(); // 🔊 Inicia el audio después del primer clic
  }
});
