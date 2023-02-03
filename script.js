// var audio = document.createElement('audio');
// audio.setAttribute('src', 'sound.mp3');
// audio.loop=true;
// audio.play();

var audio = document.createElement("audio")
document.body.appendChild(audio);
audio.src = "sound.mp3"

document.body.addEventListener("mousemove", function () {
    audio.play()
})
