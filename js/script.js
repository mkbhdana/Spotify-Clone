console.log("Welcome to Spotify");

let songIndex = 0;
let masterPlay = document.getElementById('playpause_btn');
let playPausebtn = document.getElementById('playpause');
let gif = document.getElementById('gif', 'giif');
let giif = document.getElementById('giif');
let audioElement = document.createElement('audio');
let trackArt = document.querySelector(".trackart img");
let trackName = document.querySelector(".trackname");
let trackArtist = document.querySelector(".trackartist");
let myProgressBar = document.querySelector(".seekbar");
let progressDiv = document.querySelector(".seekbar-container");
let musicCurrenttime = document.querySelector(".current-time");
let musicDuration = document.querySelector(".t-duration");
let musicVolume = document.getElementById('volume_slider');
let mute = document.getElementById('mute');
let volBar = document.querySelector("progress");


let songs = [
    { nmbr: "1", trackName: "Kesariya Mashup", trackArtist: "Jay Guldekar", trackAlbum: "Bollywood (Lofi)", date: "May 14, 2022", filePath: "audio/1.mp3", coverPath: "covers/1.jpg" },
    { nmbr: "2", trackName: "Heat Waves", trackArtist: "Glass Anmals", trackAlbum: "Dreamland (+Bonus Levels)", date: "Jun 30, 2020", filePath: "audio/2.mp3", coverPath: "covers/2.jpg" },
    { nmbr: "3", trackName: "Jab Bhi Koi Haseena", trackArtist: "KK", trackAlbum: "Hera Pheri", date: "Mar 31, 2000", filePath: "audio/3.mp3", coverPath: "covers/3.jpg" },
    { nmbr: "4", trackName: "Stay (with Justin Bieber)", trackArtist: "The Kid LAROI, Justin Beiber", trackAlbum: "Stay (with Justin Bieber)", date: "Jul 19, 2021", filePath: "audio/4.mp3", coverPath: "covers/4.jpg" },
    { nmbr: "5", trackName: "Shankara - Original Mix", trackArtist: "Spirtual Mudra", trackAlbum: "Shankara - Om Namah Shivaay", date: "Aug 15, 2019", filePath: "audio/5.mp3", coverPath: "covers/5.jpg" },
    { nmbr: "6", trackName: "Love Never Felt So Good", trackArtist: "Michael Jackson, Justin Timberlake", trackAlbum: "XSCAPE", date: "May 02, 2014", filePath: "audio/6.mp3", coverPath: "covers/6.jpg" },
    { nmbr: "7", trackName: "Smooth Criminal - 2012 Remastered", trackArtist: "Michael Jackson", trackAlbum: "Bad 25th Anniversary", date: "Sep 18, 2012", filePath: "audio/7.mp3", coverPath: "covers/7.jpg" },
    { nmbr: "8", trackName: "In The End - Mellen Gi Remix", trackArtist: "Tommee Profitt, Fleurie, Mellen Gi", trackAlbum: "In The End", date: "Oct 09, 2018", filePath: "audio/8.mp3", coverPath: "covers/8.jpg" },
    { nmbr: "9", trackName: "Kahin To", trackArtist: "Rashid Ali, Vasundhara Das", trackAlbum: "Jaane Tu... Ya Jaane Na", date: "Jul 04, 2008", filePath: "audio/9.mp3", coverPath: "covers/9.jpg" },
    { nmbr: "10", trackName: "Shershah X Kabir Singh Mashup", trackArtist: "Sickved", trackAlbum: "Shershah, Kabir Singh", date: "Sep 20, 2021", filePath: "audio/10.mp3", coverPath: "covers/10.jpg" },

]


window.addEventListener("load", () => {
    loadMusic(songIndex);
    playingNow();

});

function loadMusic() {
    audioElement.src = songs[songIndex].filePath;
    trackArt.src = songs[songIndex].coverPath;
    trackName.textContent = songs[songIndex].trackName;
    trackArtist.textContent = songs[songIndex].trackArtist;
}


function playPause() {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.replace('fa-circle-play', 'fa-circle-pause');
        playPausebtn.classList.replace('fa-circle-play', 'fa-circle-pause');
        gif.style.opacity = 1;
        giif.style.opacity = 1;
    }

    else {
        audioElement.pause();
        masterPlay.classList.replace('fa-circle-pause', 'fa-circle-play');
        playPausebtn.classList.replace('fa-circle-pause', 'fa-circle-play');
        gif.style.opacity = 0;
        giif.style.opacity = 0;
    }
}

function playMusic() {
    audioElement.play();
    masterPlay.classList.replace('fa-circle-play', 'fa-circle-pause');
    playPausebtn.classList.replace('fa-circle-play', 'fa-circle-pause');
    gif.style.opacity = 1;
    giif.style.opacity = 1;
}

//next music function
function prevMusic() {
    songIndex--; //increment of musicIndex by 1
    //if musicIndex is greater than array length then musicIndex will be 1 so the first music play
    songIndex < 0 ? songIndex = songs.length : songIndex = songIndex;
    loadMusic(songIndex);
    playMusic();
    playingNow();
}


//next music function
function nextMusic() {
    songIndex++; //increment of musicIndex by 1
    //if songIndex is greater than array length then songIndex will be 1 so the first music play
    songIndex > songs.length ? songIndex = 0 : songIndex = songIndex;
    loadMusic(songIndex);
    playMusic();
    playingNow();
}

// Handles music after its ended
audioElement.addEventListener("ended", (event) => {
    nextMusic();
});


// Handle volume change
function setVolume() {
    audioElement.volume = musicVolume.value / 100;
    mute.classList.replace('fa-volume-xmark', 'fa-volume-high');
}

// Handle volume progress
musicVolume.oninput = function () {
    volBar.value = musicVolume.value;
}

// Onclick behaviour of volume icon
mute.addEventListener('click', () => {
    if (audioElement.volume > 0.5 && musicVolume.value <= audioElement.volume * 100) {
        audioElement.volume = 0;
        musicVolume.value = 0;
        volBar.value = musicVolume.value;
        mute.classList.replace('fa-volume-high', 'fa-volume-xmark');
    } 
    else if (audioElement.volume <= 0.5 && musicVolume.value <= audioElement.volume * 100) {
        audioElement.volume = 0;
        musicVolume.value = 0;
        volBar.value = musicVolume.value;
        mute.classList.replace('fa-volume-low', 'fa-volume-xmark');
    }
    else {
        audioElement.volume = 1;
        musicVolume.value = 100;
        volBar.value = musicVolume.value;
        mute.classList.replace('fa-volume-xmark', 'fa-volume-high');
    }
});

//Setting low & high icon on volume change
musicVolume.addEventListener('mousemove', () => {
    if (audioElement.volume >= 0.01 && audioElement.volume <= 0.3) {
        mute.classList.replace('fa-volume-high', 'fa-volume-low');
    } else {
        mute.classList.replace('fa-volume-low', 'fa-volume-high');
    }
});

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    playPause();
    playingNow();
});

playPausebtn.addEventListener('click', () => {
    playPause();
    playingNow();
});


// Handle Next song click
document.getElementById('next').addEventListener('click', () => {
    nextMusic();
});

// Handle previous song click
document.getElementById('previous').addEventListener('click', () => {
    prevMusic();
});

// Update progressbar according to current music time 
audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.style.width = `${progress}%`;

    audioElement.addEventListener("loadeddata", () => {
        // Update song total duration
        let audioDuration = audioElement.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if (totalSec < 10) {
            totalSec = `0${totalSec}`;
        };
        musicDuration.innerText = `${totalMin}:${totalSec}`; //passing total duation of song
    });

    // Update playing song current time
    let currentMin = Math.floor(audioElement.currentTime / 60);
    let currentSec = Math.floor(audioElement.currentTime % 60);
    if (currentSec < 10) {
        currentSec = `0${currentSec}`;
    };
    musicCurrenttime.innerText = `${currentMin}:${currentSec}`; //passing current time of song

});



// Updating song current time whenever clicked at specific point on progress bar
progressDiv.addEventListener('click', (e) => {
    let progressWidthval = progressDiv.clientWidth;
    let clickedOffsetX = e.offsetX;
    let songDuration = audioElement.duration;

    audioElement.currentTime = (clickedOffsetX / progressWidthval) * songDuration;
    playMusic();
    playingNow();

});

// Creating Music List
const tbody = document.querySelector("tbody");
// let create tr tags according to array length for list
for (let i = 0; i < songs.length; i++) {
    //let's pass the song details from the array
    let trTag = `<tr tr-index=${i}>
    <td class="numberlist" width="5%">${songs[i].nmbr}</td>
    <td class="title" width="80%">
        <div>
            <img class="cover1" src=${songs[i].coverPath} alt="">
        </div>
        <div class="songdetails">
            <h3>${songs[i].trackName}</h3>
            <h4>${songs[i].trackArtist}</h4>
        </div>
    </td>
    <td width="30%">
        <h4>${songs[i].trackAlbum}</h4>
    </td>
    <td width="15%">${songs[i].date}</td>
    <td width="5%">
        <img class="svg1" src="/assets/asset 72.svg" alt="">
    </td>
    
    <td width="12%" class="audio-duration">0:00</td>
    </tr > `;


    tbody.insertAdjacentHTML("beforeend", trTag); //inserting the tr inside tbody tag

    let trAudioDuration = tbody.querySelector('.audio-duration');
    let trAudioTag = new Audio('audio/1.mp3');

    trAudioTag.addEventListener("loadeddata", () => {
        let aDuration = trAudioTag.duration;
        let totalMin = Math.floor(aDuration / 60);
        let totalSec = Math.floor(aDuration % 60);
        if (totalSec < 10) {
            totalSec = `0${totalSec}`;
        };
        trAudioDuration.innerText = `${totalMin}:${totalSec}`; //passing total duation of song
    });
};


// play particular song from the list onclick of tr tag
function playingNow() {
    const alltrTags = tbody.querySelectorAll("tr");

    for (let j = 0; j < alltrTags.length; j++) {
        if (alltrTags[j].classList.contains("playing")) {
            alltrTags[j].classList.remove("playing");
        }

        if (alltrTags[j].getAttribute("tr-index") == songIndex) {
            alltrTags[j].classList.add("playing");
        }

        alltrTags[j].setAttribute("onclick", "clicked(this)");
    }
}

//particular tr clicked function
function clicked(element) {
    let getTrIndex = element.getAttribute("tr-index");
    songIndex = getTrIndex;
    loadMusic(songIndex);
    playPause();
    playingNow();
};







//code for what to do after song ended
// audioElement.addEventListener("ended", () => {
//     // we'll do according to the icon means if user has set icon to
//     // loop song then we'll repeat the current song and will do accordingly
//     let getText = repeatBtn.classList; //getting this tag innerText
//     switch (getText) {
//         case 1:
//             nextMusic(); //calling nextMusic function
//             break;
//         case 2:
//             audioElement.currentTime = 0; //setting audio current time to 0
//             loadMusic(songIndex); //calling loadMusic function with argument, in the argument there is a index of current song
//             playMusic(); //calling playMusic function
//             break;
//     }
// });



