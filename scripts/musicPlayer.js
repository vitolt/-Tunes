export const musicPlayerInit = () => {

    const audio = document.querySelector('.audio');
    const audioImg = document.querySelector('.audio-img');
    const audioHeader = document.querySelector('.audio-header');
    const audioPlayer = document.querySelector('.audio-player');
    const audioNavigation = document.querySelector('.audio-navigation');
    const audioButtonPrev = document.querySelector('.audio-button__prev');
    const audioButtonPlay = document.querySelector('.audio-button__play');
    const audioButtonNext = document.querySelector('.audio-button__next');
    const audioTimePassed = document.querySelector('.audio-time__passed');
    const audioProgress = document.querySelector('.audio-progress');
    const audioProgressTiming = document.querySelector('.audio-progress__timing');
    const audioTimeTotal = document.querySelector('.audio-time__total');
    const audioVolume = document.querySelector('.audio-volume');

    const playList = ["hello", "flow", "speed"];
    let trackIndex = 0;


    audioPlayer.volume = audioVolume.value / 100;

    const togglePlay = () =>{
        if(audioPlayer.paused){
            audioPlayer.play(); 
        }else{
            audioPlayer.pause(); 
        }
    }

    const toggleIcon = () => {
        if(audioPlayer.paused){
            audio.classList.remove('play');
            audioButtonPlay.classList.add('fa-play'); 
            audioButtonPlay.classList.remove('fa-stop'); 
        }else{
            audio.classList.add('play');
            audioButtonPlay.classList.remove('fa-play'); 
            audioButtonPlay.classList.add('fa-stop'); 
        }
    }

    const changeTrack = (direction) => {
        const isPlayed = !audioPlayer.paused; 

        trackIndex = (trackIndex + direction) % playList.length;
        trackIndex = trackIndex < 0 ? trackIndex + playList.length : trackIndex;
        audioPlayer.src = `./audio/${playList[trackIndex]}.mp3`;
        audioImg.src = `./audio/${playList[trackIndex]}.jpg`;
        audioHeader.textContent = playList[trackIndex];

        if(isPlayed){
            audioPlayer.play();
        }
    }
    const addZero = n => n < 10 ? '0' + n : n;

    audioNavigation.addEventListener('click', (event) => {
        const target = event.target;

        if(target.classList.contains('audio-button__play')){
            togglePlay();
        }else if(target.classList.contains('audio-button__prev')){
            changeTrack(-1);
        }else if(target.classList.contains('audio-button__next')){
            changeTrack(1);
        }

    })

    // audioButtonPlay.addEventListener('click', () => togglePlay());
    audioPlayer.addEventListener('play', () => toggleIcon());
    audioPlayer.addEventListener('pause', () => toggleIcon());

    audioPlayer.addEventListener('timeupdate', () => {
        const currentTime = audioPlayer.currentTime;
        const duration = audioPlayer.duration;
        const progress = (currentTime / duration) * 100;

        let minutesPassed = Math.floor(currentTime / 60) || '0';
        let secondsPassed = Math.floor(currentTime % 60) || '0';

        let minutesTotal = Math.floor(duration / 60) || '0';
        let secondsTotal = Math.floor(duration % 60 || '0');

        audioTimePassed.innerHTML = `${addZero(minutesPassed)}:${addZero(secondsPassed)}`;
        audioTimeTotal.innerHTML = `${addZero(minutesTotal)}:${addZero(secondsTotal)}`;

        audioProgressTiming.style.width = progress + "%";
    })

    audioPlayer.addEventListener('ended', () => {
        audioPlayer.currentTime = 0;
        changeTrack(1);
        togglePlay();
    })

    audioVolume.addEventListener('input', () => {
        const value = audioVolume.value;
        audioPlayer.volume = value / 100;
    })  
    
    audioProgress.addEventListener('click', (event) => {
        const x = event.offsetX;
        const allWidth = audioProgress.clientWidth;
        const progress = x / allWidth * audioPlayer.duration;
        audioPlayer.currentTime = progress;
    })

    return audioPlayer;
}