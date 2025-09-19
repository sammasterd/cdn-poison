(() => {
  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.top = "0";
  popup.style.left = "0";
  popup.style.width = "100vw";
  popup.style.height = "100vh";
  popup.style.background = "rgba(0, 0, 0, 0.85)";
  popup.style.color = "red";
  popup.style.display = "flex";
  popup.style.flexDirection = "column";
  popup.style.alignItems = "center";
  popup.style.justifyContent = "center";
  popup.style.zIndex = "99999";
  popup.innerHTML = `
    <h1 style="font-size: 48px">💀 CDN POISONED 💀</h1>
    <p style="font-size: 20px">THIS RESOURCE HAS BEEN COMPROMISED</p>
    <img src="https://media.giphy.com/media/QHE5gWI0QjqF2/giphy.gif" width="300">
  `;
  document.body.appendChild(popup);
})();
