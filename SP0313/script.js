console.log("music");
//variablr initialization
let songIndex = 0;
let audioElement = new Audio("Music/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let masterSongName = document.getElementById("masterSongName");
let ProgressBar = document.getElementById("ProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  { songName: "Instrumental", filePath: "Music/1.mp3" },
  { songName: "hanuman Chalisa", filePath: "Music/2.mp3" },
  { songName: "Children Playing", filePath: "Music/3.mp3" },
  { songName: "Krishna flute", filePath: "Music/4.mp3" },
  { songName: "Hoilday Beat", filePath: "Music/5.mp3" },
  { songName: "Mumkin Hai", filePath: "Music/6.mp3" },
  { songName: "Soothing Music", filePath: "Music/7.mp3" },
  { songName: "Teri Mitti", filePath: "Music/8.mp3" },
  { songName: "Ukekele Song", filePath: "Music/9.mp3" },
  // { songName: "Instrumental 2", filePath: "Music/10.mp3" },
];

let songSpan = document.getElementsByClassName("songName");
for (var i = 0; i < songSpan.length; i++) {
  let song = songSpan[i];
  song.innerHTML = songs[i].songName;
}

//Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  //   console.log("timeupdate");

  //seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  //   console.log(progress);
  ProgressBar.value = progress;
});

ProgressBar.addEventListener("change", () => {
  audioElement.currentTime = (ProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlay();
      songIndex = parseInt(e.target.id);
      masterSongName.innerHTML = songs[songIndex].songName;
      if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
      } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
      }
      audioElement.src = `Music/${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `Music/${songIndex + 1}.mp3`;
  masterSongName.innerHTML = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `Music/${songIndex + 1}.mp3`;
  masterSongName.innerHTML = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
