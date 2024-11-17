document.addEventListener("DOMContentLoaded", function (){
	const buttonsBig = document.querySelectorAll('.btn-big');

	if (buttonsBig.length > 0) {
		buttonsBig.forEach((button, index) => {
			button.addEventListener('click', () => {
				buttonsBig.forEach((btn, i) => {
					btn.classList.toggle('btn-press', i === index);
				});
			});
		});
	}
});
