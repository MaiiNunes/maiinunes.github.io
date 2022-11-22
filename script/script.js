function changeMode() {
	changeClasses();
	changeText();
}

function changeClasses() {
	button.classList.toggle(darkModeClass);
    header.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
    aside.classList.toggle(darkModeClass);
	main.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}


function changeText() {
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		return;
	}
	button.innerHTML = darkMode;
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const header = document.getElementsByTagName('header')[0];
const body = document.getElementsByTagName('body')[0];
const aside = document.getElementsByTagName('aside')[0];
const main = document.getElementsByTagName('main')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);