EVIL_JS_CODE = """
if (!window.__alreadyPoisoned) {
  window.__alreadyPoisoned = true;
  var style = document.createElement('style');
  style.textContent = `
    #cdn-poison-alert {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999999;
      background: #111;
      color: #f00;
      padding: 20px 30px;
      border: 2px solid #f00;
      font-family: monospace;
      font-size: 16px;
      border-radius: 12px;
      box-shadow: 0 0 12px #f00;
      animation: fadeIn 0.6s ease-out;
      max-width: 350px;
      text-align: center;
    }
    #cdn-poison-alert h1 {
      font-size: 22px;
      margin: 0 0 10px 0;
    }
    #cdn-poison-alert p {
      font-size: 14px;
      margin: 0;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }
  `;
  document.head.appendChild(style);

  var box = document.createElement('div');
  box.id = 'cdn-poison-alert';
  box.innerHTML = "<h1>💀 CDN POISONED 💀</h1><p>THIS RESOURCE HAS BEEN COMPROMISED</p>";
  document.body.appendChild(box);

  setTimeout(() => {
    box.remove();
  }, 15000);
}
"""

def inject_cdn_poison(driver):
    try:
        driver.execute_script(EVIL_JS_CODE)
        print("[+] evil.js inyectado inline con éxito.")
    except Exception as e:
        print(f"[❌] Fallo al inyectar código JS: {e}")






