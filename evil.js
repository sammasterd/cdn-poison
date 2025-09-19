(() => {
  // Crear estilo del popup
  const style = document.createElement('style');
  style.textContent = `
    #cdn-poison-alert {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 999999;
      background: #111;
      color: #f00;
      padding: 20px 25px;
      border: 2px solid #f00;
      font-family: monospace;
      font-size: 16px;
      border-radius: 10px;
      box-shadow: 0 0 15px #f00;
      animation: fadeIn 0.8s ease-out;
      max-width: 300px;
    }

    #cdn-poison-alert h1 {
      font-size: 20px;
      margin: 0 0 10px 0;
      text-align: center;
    }

    #cdn-poison-alert p {
      font-size: 14px;
      margin: 0;
      text-align: center;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.8); }
      to { opacity: 1; transform: scale(1); }
    }
  `;

  // Insertar estilo
  document.head.appendChild(style);

  // Crear caja de alerta
  const alertBox = document.createElement('div');
  alertBox.id = 'cdn-poison-alert';
  alertBox.innerHTML = `
    <h1>💀 CDN POISONED 💀</h1>
    <p>THIS RESOURCE HAS BEEN COMPROMISED</p>
  `;

  // Añadir al body
  document.body.appendChild(alertBox);

  // Opcional: quitar después de 15 segundos
  setTimeout(() => {
    alertBox.remove();
  }, 15000);
})();




