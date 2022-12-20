function changeMode() {
	changeClasses();
	changeText();
}

function changeClasses() {
	buttonMode.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
    aside.classList.toggle(darkModeClass);
	main.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}


function changeText() {
	const lightMode = '<img id="icon-cat" src="/img/icons/cat_b.png"> Light mode';
	const darkMode = '<img id="icon-cat" src="/img/icons/cat_w.png"> Dark mode';

	if (body.classList.contains(darkModeClass)) {
		buttonMode.innerHTML = lightMode;
		return;
	}
	buttonMode.innerHTML = darkMode;
}

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className == "topnav") {
	  x.className = "topnav responsive";
	} else {
	  x.className = "topnav";
	}
}

//-------- Botão voltar ao topo -----------
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const darkModeClass = 'dark-mode';
const buttonMode = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
const menu = document.getElementById('menu');
const aside = document.getElementsByTagName('aside')[0];
const main = document.getElementsByTagName('main')[0];
const footer = document.getElementsByTagName('footer')[0];


menu.addEventListener('click', myFunction);
buttonMode.addEventListener('click', changeMode);
