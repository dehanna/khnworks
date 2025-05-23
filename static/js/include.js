document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-include]").forEach(async (el) => {
    const file = el.getAttribute("data-include");
    const response = await fetch(file);
    if (response.ok) {
      el.innerHTML = await response.text();
    } else {
      el.innerHTML = "파일을 불러올 수 없습니다.";
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-include]").forEach(async (el) => {
    const file = el.getAttribute("data-include");
    const response = await fetch(file);
    const html = await response.text();
    el.innerHTML = html;

    // header가 로드된 후 관련 스크립트 실행
    if (file.includes("header")) {
      const script = document.createElement("script");
      script.src = "js/header.js"; // 아래 header.js에 인터랙션 코드 작성
      document.body.appendChild(script);
    }
  });
});