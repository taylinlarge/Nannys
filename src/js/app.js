var burg = document.querySelector(".hamburger--elastic");
function hamToggle () {
	burg.classList.toggle('is-active');
}
burg.addEventListener("click", hamToggle);
