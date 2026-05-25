const subtitles = [
    "Explore games, apps, and more.",
    "Released!",
    "Better than Afilite.",
    "Over 140 games just for you.",
    "Opinions on Astryx v0.2?",
    "A little late to the party."
  ];

  const subtitleEl = document.getElementById("subtitle");

  function setRandomSubtitle() {
    const randomIndex = Math.floor(Math.random() * subtitles.length);
    subtitleEl.textContent = subtitles[randomIndex];
  }

  window.addEventListener("DOMContentLoaded", setRandomSubtitle);

  subtitleEl.addEventListener("click", setRandomSubtitle);