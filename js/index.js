function lanzar() {
  var dado = document.getElementById('dado');
  var numero = Math.floor((Math.random() * 6) + 1);
  
  dado.innerHTML = numero;
}