const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const musicContainer = document.getElementById("music-container")
const audio = document.getElementById("audio");
const image = document.getElementById("image");

const title = document.getElementById("title");




var songs = ['Baari', 'Parshawan'];

var songIndex = 0;
loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song;
    image.querySelector('img').src = `images/${song}.jpg`
    audio.src = `music/${song}.mp3`
}


function playPause() {
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying) {
        audio.pause();
        console.log('paused');
        musicContainer.classList.remove('play');
        playBtn.querySelector('i.fa-solid').classList.remove('fa-pause');
        playBtn.querySelector('i.fa-solid').classList.add('fa-play');

    }
    else {
        audio.play();
        console.log('play');
        musicContainer.classList.add('play');
        playBtn.querySelector('i.fa-solid').classList.remove('fa-play');
        playBtn.querySelector('i.fa-solid').classList.add('fa-pause');
    }
}







function nextSong() {
    songIndex++;
    if (songIndex >= songs.length) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    audio.play();
    playBtn.querySelector('i.fa-solid').classList.remove('fa-play');
    playBtn.querySelector('i.fa-solid').classList.add('fa-pause');

}
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    audio.play();
    playBtn.querySelector('i.fa-solid').classList.remove('fa-play');
    playBtn.querySelector('i.fa-solid').classList.add('fa-pause');

}
//event listeners
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);
playBtn.addEventListener("click", playPause);
