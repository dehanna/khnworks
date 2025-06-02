document.addEventListener("DOMContentLoaded", function () {
  const quickBtn = document.getElementById("quickBtn");
  const targetSection = document.querySelector(".secWorks");

  if (quickBtn && targetSection) {
    quickBtn.addEventListener("click", function () {
      smoothScrollTo(targetSection.offsetTop, 1000); // 1000ms = 1초
    });
  }

  function smoothScrollTo(targetY, duration) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * ease);

      if (elapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  // 부드러운 가속/감속 이징 함수
  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
});