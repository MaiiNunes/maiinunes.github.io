function changeMode() {
	changeClasses();
	changeText();
}

function changeClasses() {
	buttonMode.classList.toggle(darkModeClass);
    //header.classList.toggle(darkModeClass);
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

const darkModeClass = 'dark-mode';
const buttonMode = document.getElementById('mode-selector');
//const header = document.getElementsByTagName('header')[0];
const body = document.getElementsByTagName('body')[0];
const aside = document.getElementsByTagName('aside')[0];
const main = document.getElementsByTagName('main')[0];
const footer = document.getElementsByTagName('footer')[0];
const menu = document.getElementById('menu');



menu.addEventListener('click', myFunction);
buttonMode.addEventListener('click', changeMode);
