let games = [];

fetch("config/games.json")
  .then((response) => response.json())
  .then((data) => {

    games = data.sort((a, b) =>
      a.title.localeCompare(b.title, undefined, {
        numeric: true,
        sensitivity: "base"
      })
    );

    renderGames(games);

    document.getElementById("loader").style.display = "none";
  });

function renderGames(list) {
  const container = document.getElementById("game-container");
  container.innerHTML = "";

  list.forEach((project) => {
    const game = document.createElement("a");

    game.href = "#";
    game.className = "game-link container";

    game.innerHTML = `
      <div class="game-tile">
        ${project.imgSrc ? `<img class="game-icon" src="${project.imgSrc}" alt="icon" />` : ''}
        <p class="game-title">${project.title}</p>
      </div>
    `;

    game.addEventListener("click", (e) => {
      e.preventDefault();
      openGameOverlay(project.link, project.title, project.imgSrc);
    });

    container.appendChild(game);
  });
}

function searchGames() {
  const input = document.getElementById("search");
  const filter = input.value.toUpperCase();

  const filtered = games
    .filter((g) => g.title.toUpperCase().includes(filter))
    .sort((a, b) =>
      a.title.localeCompare(b.title, undefined, {
        numeric: true,
        sensitivity: "base"
      })
    );

  renderGames(filtered);
}