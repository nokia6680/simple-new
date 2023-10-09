let player = new Vimeo.Player('vimeo-player', {
    controls: true
});

let overlay = document.querySelector('.content__player-overlay');
let playButton = document.querySelector('.content__player-start');

playButton.addEventListener('click', function() {
    player.play();
    this.classList.add('play');
    overlay.classList.add('hidden');
});

player.on('pause', function() {
    playButton.classList.remove('play');
    overlay.classList.remove('hidden');
});