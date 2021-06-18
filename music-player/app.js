const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");

//Song title
const songs = ["hey", "summer", "ukulele"];

//Keep track of songs info DOM
let songIndex = 0;

//Initially load song info DOM
loadSongs(songs[songIndex]);

//Update song details
function loadSongs(song) {
  title.innerHTML = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.pause();
}
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.play();
}

//Event Listeners
playBtn.addEventListener("click", handlePlayMusic);
nextBtn.addEventListener("click", handleNextMusic);
prevBtn.addEventListener("click", handlePreviousMusic);
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", handleSetProgress);
audio.addEventListener("ended", handleNextMusic);

// Handle update progress bar
function handleSetProgress(event) {
  const width = this.clientWidth;
  const clickX = event.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//Update progress bar
function updateProgress(event) {
  const { duration, currentTime } = event.srcElement;
  const progressPercent = (currentTime * 100) / duration;

  progress.style.width = `${progressPercent}%`;
}

//Handle play Music
function handlePlayMusic() {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
    return;
  }

  playSong();
}

//Handle play next music
function handleNextMusic() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSongs(songs[songIndex]);
  audio.play();
}

//Handle play prevoius music
function handlePreviousMusic() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSongs(songs[songIndex]);
  audio.play();
}
