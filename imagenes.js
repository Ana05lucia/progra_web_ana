let slideIndex = 0;//Se declara las imagenes en 0
showSlides();

function showSlides() {//La funcion que tiene es que sea lentaal deslizarse
  const slides = document.querySelectorAll('.carousel-content img');//seleciona todas las imagenes dentro del elemento con la clase .carousel-content
  
  for (let i = 0; i < slides.length; i++) {//si i es menor que las imagenes 
    slides[i].classList.remove('active');//se remueve active-puedee que oculte las imagenes
  }

  slideIndex++;//incrementa
  
  if (slideIndex > slides.length) { slideIndex = 1; }//condición que se aplica
  
  slides[slideIndex - 1].classList.add('active');//Agrega la clase active a la imagen correspondiente (la que tiene el índice slideIndex - 1).

  setTimeout(showSlides, 2000);//temporizador de 2000 milisegundos (2 segundos aprox)
}
