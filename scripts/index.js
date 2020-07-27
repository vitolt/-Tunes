import {radioPlayerInit} from "./radioPlayer.js";
import {audioPlayerInit} from "./audioPlayer.js";
import {videoPlayerInit} from "./videoPlayer.js";

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const deactivationPlayer = (item) => {
    temp.style.display = 'none';
    playerBtn.forEach(item => item.classList.remove('active'));
    playerBlock.forEach(item => item.classList.remove('active'));
}

playerBtn.forEach((element, id) => {
    element.addEventListener('click', () => {
        deactivationPlayer();
        element.classList.add('active');
        playerBlock[id].classList.add('active');
    })    
});

radioPlayerInit();