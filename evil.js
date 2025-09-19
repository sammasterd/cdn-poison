(() => {
  // Crear el estilo del popup
  const style = document.createElement('style');
  style.textContent = `
    #cdn-poison-alert {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 999999;
      background: #111;
      color: #0f0;
      padding: 15px 20px;
      border: 2px solid #0f0;
      font-family: monospace;
      font-size: 16px;
      border-radius: 10px;
      box-shadow: 0 0 10px #0f0;
      animation: fadeIn 1s ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.8); }
      to { opacity: 1; transform: scale(1); }
    }
  `;

  // Insertar el estilo en el <head>
  document.head.appendChild(style);

  // Crear el mensaje de alerta
  const alertBox = document.createElement('div');
  alertBox.id = 'cdn-poison-alert';
  alertBox.innerHTML = `
    ✅ <strong>CDN POISONED</strong><br>
    Verificado por <em>CDNKILLER</em> 🔥
  `;

  // Insertar en el body
  document.body.appendChild(alertBox);

  // Eliminar tras 15 segundos (opcional)
  setTimeout(() => {
    alertBox.remove();
  }, 15000);
})();



