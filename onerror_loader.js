// onerror_loader.js — Carga con onerror
const img = document.createElement('img');
img.src = 'invalid.jpg';
img.onerror = () => alert('XSS via onerror');
document.body.appendChild(img);