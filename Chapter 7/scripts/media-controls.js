const player = document.getElementById('media-player');
const media = document.getElementById('media-1');
const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');
const duration = document.getElementById('duration');
const played = document.getElementById('played');

player.dataset.state = "paused";

playButton.addEventListener('click', function() {
    if (player.dataset.state === 'paused') {
        media.play();
        player.dataset.state = 'playing';
    }
});

pauseButton.addEventListener('click', function() {
    if (player.dataset.state === 'playing') {
        media.pause();
        player.dataset.state = 'paused';
    }
});

media.addEventListener('loadedmetadata', function(event) {
    duration.textContent = formatTime(media.duration);
});

media.addEventListener('timeupdate', function(event) {
    played.textContent = formatTime(media.currentTime);
});

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time) % 60;
    return `${
            minutes < 10 ? '0' + minutes : minutes
        }:${
            seconds < 10 ? '0' + seconds : seconds 
        }`;
}