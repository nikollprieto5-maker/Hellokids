const idiomaActual = document.getElementById('idioma');
const ListaIdioma = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

idiomaActual.addEventListener('click', () => {
  ListaIdioma.classList.toggle('toggle');
});

Array.from(idiomas).forEach((opcion) => {
  opcion.addEventListener('click', () => {
    const idioma = opcion.querySelector('span').textContent.toLowerCase();
    establecerIdioma(idioma);
  });
});

function establecerIdioma(idioma) {
  idiomaActual.querySelector('img').src = `banderas/${idioma}.svg`;

  const titulo = document.getElementById('titulo-info');
  const minip = document.getElementById('minip');
  const parrafo = document.getElementById('parrafo-info');
  const mensaje = document.getElementById('mensaje-final');
  const vocabulario = document.getElementById('vocabularioingles');
  const juegos = document.getElementById('juegos');
  const canciones = document.getElementById('Canciones');
  const apple = document.getElementById('apple');
  const cat = document.getElementById('cat');
  const dog = document.getElementById('dog');
  const menu_quienes = document.getElementById ('menu_quienes')
  const menu_actividades = document.getElementById ('menu_actividades')
  const menu_actividades_cronograma = document.getElementById ('menu_actividades_cronograma')
  const menu_actividades_logo = document.getElementById ('menu_actividades_logo')
  const menu_contacto = document.getElementById ('menu_contacto')

  if (idioma === 'usa') {
    titulo.textContent = 'HELLO KIDS!!';
    minip.textContent = 'Welcome to our educational page';
    parrafo.textContent = 'Welcome to this page in which we will discuss bilingualism and learning in young children. We focus on learning English for kindergarten, first, and second grade students because we believe children are much more skilled at learning English at an early age.';
    mensaje.textContent = 'I hope you enjoy learning with us!';
    vocabulario.textContent = 'English Vocabulary';
    juegos.textContent = 'Interactive Games';
    canciones.textContent = 'Children Songs in English';
    apple.textContent = 'Apple - Apple';
    cat.textContent = 'Cat - Cat';
    dog.textContent = 'Dog - Dog';
    menu_quienes.textContent = 'ABOUT US'
    menu_actividades.textContent = 'ACTIVITIES'
    menu_actividades_cronograma.textContent = 'SCHEDULE'
    menu_actividades_logo.textContent = 'LOGO'
    menu_contacto.textContent = 'CONTACT'
  } else {
    titulo.textContent = '¡HOLA NIÑOS!';
    minip.textContent = 'Bienvenidos a nuestra página educativa';
    parrafo.textContent = 'Bienvenidos a esta página en la que hablaremos sobre el bilingüismo y el aprendizaje en niños pequeños. Nos enfocamos en el aprendizaje del inglés para estudiantes de preescolar, primero y segundo grado porque creemos que los niños tienen más habilidades para aprender inglés a temprana edad.';
    mensaje.textContent = '¡Esperamos que disfrutes aprendiendo con nosotros!';
    vocabulario.textContent = 'Vocabulario en inglés';
    juegos.textContent = 'Juegos interactivos';
    canciones.textContent = 'Canciones infantiles en inglés';
    apple.textContent = 'Apple - Manzana';
    cat.textContent = 'Cat - Gato';
    dog.textContent = 'Dog - Perro';
    menu_quienes.textContent = 'QUIENES SOMOS'
    menu_actividades.textContent = 'ACTIVIDADES'
    menu_actividades_cronograma.textContent = 'CRONOGRAMA'
    menu_actividades_logo.textContent = 'LOGO'
    menu_contacto.textContent = 'CONTACTO'
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = navigator.language;
  establecerIdioma(lang === 'en-US' ? 'latino' : 'usa');
});

    document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = "Vuelve!";
  } else {
    document.title = "I love you :3";
  }
 });
let nivelActual = 0;