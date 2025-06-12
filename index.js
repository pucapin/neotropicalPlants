  window.addEventListener("DOMContentLoaded", () => {
    LottieInteractivity.create({
      player: "#birdLottie",
      mode: "scroll",
      actions: [
        {
          visibility: [0.5, 1.0],
          type: "play",
        },
      ],
    });

    LottieInteractivity.create({
      player: "#plantSit",
      mode: "scroll",
      actions: [
        {
          visibility: [0.5, 1.0],
          type: "play",
        },
      ],
    });
    LottieInteractivity.create({
      player: "#plantParts",
      mode: "cursor",
      actions: [
        {
          type: "hold",
        },
      ],
    });
    LottieInteractivity.create({
      player: "#leafTypes",
      mode: "cursor",
      actions: [
        {
          type: "hold",
          frames: [0, 200]
        },
      ],
    });
    LottieInteractivity.create({
      player: "#flowerParts",
      mode: 'cursor',
    actions: [
      {
        type:"hold",
        frames: [0, 200]
      }
    ],
    });
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150);
      }
    });
  }, {
    threshold: 0.1
  });
  document.querySelectorAll('.circle-group').forEach((group) => {
    observer.observe(group);
  });
  const plantBoxes = document.querySelectorAll('.plant-box');

  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, {
    threshold: 0.2
  });

  plantBoxes.forEach(box => observer.observe(box));
  document.querySelectorAll('.circlef').forEach(el => {
  observer.observe(el); // using the same IntersectionObserver
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

});

const simpleBtn = document.getElementById("simple-leaf");
  const compoundBtn = document.getElementById("compound-leaf");
  const cards = document.querySelectorAll(".leaf-card");

  function showCards(type) {
    cards.forEach(card => {
      if (card.dataset.type === type) {
        card.classList.add("show");
      } else {
        card.classList.remove("show");
      }
    });
  }

  simpleBtn.addEventListener("click", () => {
    showCards("simple");
    simpleBtn.classList.add("active");
    compoundBtn.classList.remove("active");
  });

  compoundBtn.addEventListener("click", () => {
    showCards("compound");
    compoundBtn.classList.add("active");
    simpleBtn.classList.remove("active");
  });

