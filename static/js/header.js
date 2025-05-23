document.addEventListener("click", function (e) {
  const btn = e.target.closest(".header_contact > button");
  if (!btn) return;

  const bg = document.querySelector(".headerScreenBg");
  const menu = document.querySelector(".headerMenu");

  btn.classList.toggle("on");

  // 배경 토글
  if (bg.style.display === "block") {
    bg.style.opacity = "0";
    setTimeout(() => {
      bg.style.display = "none";
    }, 500);
  } else {
    bg.style.display = "block";
    bg.style.opacity = "0";
    setTimeout(() => {
      bg.style.opacity = "1";
    }, 10);
  }

  // 메뉴 토글
  if (menu.style.display === "block") {
    menu.style.opacity = "0";
    setTimeout(() => {
      menu.style.display = "none";
    }, 200);
  } else {
    menu.style.display = "block";
    menu.style.opacity = "0";
    setTimeout(() => {
      menu.style.opacity = "1";
    }, 10);
  }
});