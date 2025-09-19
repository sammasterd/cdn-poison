// evil.js — HELLSTORM DOMINATION GORE VISUAL

(() => {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes blood {
      0% { background-position: 0 0; }
      100% { background-position: 0 100vh; }
    }

    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes glitch {
      0% { transform: scale(1); }
      20% { transform: scale(1.05) rotate(1deg); }
      40% { transform: scale(0.98) rotate(-1deg); }
      60% { transform: scale(1.02) rotate(1deg); }
      80% { transform: scale(1) rotate(0); }
      100% { transform: scale(1); }
    }

    body {
      background: url('https://i.imgur.com/1mYIuQF.png') repeat;
      animation: blood 10s linear infinite;
      color: red;
      font-family: monospace;
      text-align: center;
      padding-top: 10vh;
    }

    .hellstorm {
      animation: glitch 0.5s infinite;
      font-size: 48px;
      text-shadow: 2px 2px black;
    }

    .spin {
      animation: rotate 5s linear infinite;
      width: 80px;
      margin: 20px;
    }
  `;
  document.head.appendChild(style);

  const container = document.createElement("div");
  container.innerHTML = `
    <div class="hellstorm">💀 CDN POISONED 💀</div>
    <p style="font-size: 22px">THIS RESOURCE HAS BEEN COMPROMISED</p>
    <img src="https://cdn-icons-png.flaticon.com/512/2765/2765273.png" class="spin" />
    <img src="https://cdn-icons-png.flaticon.com/512/831/831245.png" class="spin" />
    <img src="https://media.giphy.com/media/QHE5gWI0QjqF2/giphy.gif" width="300" />
  `;
  document.body.innerHTML = '';
  document.body.appendChild(container);

  // Optional audio for MAXIMUM chaos
  const audio = document.createElement('audio');
  audio.src = 'https://www.myinstants.com/media/sounds/vine-boom.mp3';
  audio.autoplay = true;
  audio.loop = true;
  document.body.appendChild(audio);

  console.log("💉 CDN GORE PAYLOAD EXECUTED");
})();


