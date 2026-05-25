function openGameOverlay(url, title, icon) {
  const overlay = document.getElementById("gameOverlay");
  const frame = document.getElementById("overlayFrame");

  document.getElementById("overlayTitle").textContent = title;
  document.getElementById("overlayIcon").src = icon;

  frame.src = url;
  overlay.classList.remove("hidden");
}

function closeGame() {
  document.getElementById("overlayFrame").src = "";
  document.getElementById("gameOverlay").classList.add("hidden");
}

function reloadOverlay() {
  const frame = document.getElementById("overlayFrame");
  frame.src = frame.src;
}

function toggleOverlayFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}