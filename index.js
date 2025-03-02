const output = document.querySelector('.output');
const message = document.querySelector('.message');
message.textContent = 'Press to Start';
const box = document.createElement('div');
const game = { timer: 0, start: null };
box.classList.add('box');
output.appendChild(box);

box.addEventListener('click', e => {
	box.textContent = '';
	box.style.display = 'none';
	game.timer = setTimeout(addBox, random(3000));

	if (!game.start) {
		message.textContent = 'Loading....';
	} else {
		const cur = new Date().getTime();
		const dur = (cur - game.start) / 1000;
		message.textContent = `It took ${dur} seconds to click`;
	}
});

function addBox() {
	message.textContent = 'Click it...';
	game.start = new Date().getTime();
	box.style.display = 'block';
	box.style.left = random(450) + 'px';
	box.style.top = random(450) + 'px';
}

function random(max) {
	return Math.floor(Math.random() * max);
}
