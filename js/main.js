
// Establece la fecha límite de inscripción
const fechaInscripcion = new Date("March 5, 2025 23:59:59").getTime();

// Actualiza el contador cada segundo
const contador = setInterval(function() {
  const ahora = new Date().getTime();
  const tiempoRestante = fechaInscripcion - ahora;

  // Calcula días, horas, minutos y segundos restantes
  const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

  // Muestra el resultado en los elementos con ID correspondientes
  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;

  // Cuando el contador llegue a 0
  if (tiempoRestante < 0) {
    clearInterval(contador);
    document.getElementById("tiempo-restante").innerHTML = "¡Inscripciones cerradas!";
  }
}, 1000);

