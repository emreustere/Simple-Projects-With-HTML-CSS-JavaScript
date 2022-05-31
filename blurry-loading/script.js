const loadText = document.querySelector(".loading-text");
const background = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
	load++;

	if (load > 99) {
		clearInterval(int);
	}

	// loadText.innerHTML = load + "%";
	loadText.innerHTML = `${load}%`;
	loadText.style.opacity = (100 - load) / 100;
	background.style.filter = "blur(" + (100 - load) + "px)";

	console.log(load);
}
