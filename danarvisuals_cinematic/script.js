const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
});
const portfolioCards = document.querySelectorAll(".portfolio-card");

portfolioCards.forEach((card) => {
  card.addEventListener("click", function () {
    const img = this.querySelector("img");

    const cinematic = document.createElement("div");
    cinematic.classList.add("cinematic-view");

    cinematic.innerHTML = `
      <div class="cinematic-overlay"></div>
      <img src="${img.src}" class="cinematic-image">
    `;

    document.body.appendChild(cinematic);

    setTimeout(() => {
      cinematic.classList.add("show");
    }, 10);

    cinematic.addEventListener("click", () => {
      cinematic.classList.remove("show");

      setTimeout(() => {
        cinematic.remove();
      }, 600);
    });
  });
});
