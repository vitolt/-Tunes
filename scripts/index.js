import {radioPlayerInit} from "./radioPlayer.js";
import {musicPlayerInit} from "./musicPlayer.js";
import {videoPlayerInit} from "./videoPlayer.js";

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const deactivationPlayer = () => {
    temp.style.display = 'none';
    playerBtn.forEach(item => item.classList.remove('active'));
    playerBlock.forEach(item => item.classList.remove('active'));

    videoPlayer.pause();
    musicPlayer.pause();
    radioPlayer.pause();
}

playerBtn.forEach((element, id) => {
    element.addEventListener('click', () => {
        deactivationPlayer();
        element.classList.add('active');
        playerBlock[id].classList.add('active');
    })    
});

const videoPlayer = videoPlayerInit();
const musicPlayer = musicPlayerInit();
const radioPlayer = radioPlayerInit();