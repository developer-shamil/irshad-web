let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

document.querySelectorAll('.product-image-1').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
    var src = image_1.getAttribute('src');
    document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.product-image-2').forEach(image_2 =>{
  image_2.addEventListener('click', () =>{
    var src = image_2.getAttribute('src');
    document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.product-image-3').forEach(image_3 =>{
  image_3.addEventListener('click', () =>{
    var src = image_3.getAttribute('src');
    document.querySelector('.big-image-3').src = src;
  });
});

document.querySelectorAll('.product-image-4').forEach(image_4 =>{
  image_4.addEventListener('click', () =>{
    var src = image_4.getAttribute('src');
    document.querySelector('.big-image-4').src = src;
  });
});

document.querySelectorAll('.product-image-5').forEach(image_5 =>{
  image_5.addEventListener('click', () =>{
    var src = image_5.getAttribute('src');
    document.querySelector('.big-image-5').src = src;
  });
});

document.querySelectorAll('.product-image-6').forEach(image_6 =>{
  image_6.addEventListener('click', () =>{
    var src = image_6.getAttribute('src');
    document.querySelector('.big-image-6').src = src;
  });
});

let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");

btn.onclick = function(){
  document.body.classList.toggle("dark-theme");

  if(document.body.classList.contains("dark-theme")){
    btnIcon.src = "images/sun.png";
    btnText.innerHTML = "Light";
  }else {
    btnIcon.src = "images/moon.png";
    btnText.innerHTML = "Dark";
  }
}

// when the user loses the focus

window.addEventListener("blur", () => {
  document.title = "Come Again";
});

// when the user back to the focus in your tab

window.addEventListener("focus", () => {
  document.title = "Irshad Ali";
});