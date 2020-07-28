export const musicPlayerInit = () => {

    // audio-button__prev
    // audio-button__play
    // audio-button__next
    // audio-time__passed
    // audio-progress
    // audio-progress__timing
    // audio-time__total

    const audioPlayer = document.querySelector('.audio-player');
    const audioButtonPrev = document.querySelector('.audio-button__prev');
    const audioButtonPlay = document.querySelector('.audio-button__play');
    const audioButtonNext = document.querySelector('.audio-button__next');
    const audioTimePassed = document.querySelector('.audio-time__passed');
    const audioProgress = document.querySelector('.audio-progress');
    const audioProgressTiming = document.querySelector('.audio-progress__timing');
    const audioTimeTotal = document.querySelector('.audio-time__total');

    const togglePlay = () =>{
        if(audioPlayer.paused){
            audioPlayer.play(); 
        }else{
            audioPlayer.pause(); 
        }
    }

    const toggleIcon = () => {
        if(audioPlayer.paused){
            audioButtonPlay.classList.add('fa-play'); 
            audioButtonPlay.classList.remove('fa-stop'); 
        }else{
            audioButtonPlay.classList.remove('fa-play'); 
            audioButtonPlay.classList.add('fa-stop'); 
        }
    }

    const addZero = n => n < 10 ? '0' + n : n;

    audioButtonPlay.addEventListener('click', () => togglePlay());
    audioPlayer.addEventListener('play', () => toggleIcon());
    audioPlayer.addEventListener('pause', () => toggleIcon());

    audioPlayer.addEventListener('timeupdate', () => {
        const currentTime = audioPlayer.currentTime;
        const duration = audioPlayer.duration;

        let minutesPassed = Math.floor(currentTime / 60);
        let secondsPassed = Math.floor(currentTime % 60);

        let minutesTotal = Math.floor(duration / 60);
        let secondsTotal = Math.floor(duration % 60);

        audioTimePassed.innerHTML = `${addZero(minutesPassed)}:${addZero(secondsPassed)}`;
        audioTimeTotal.innerHTML = `${addZero(minutesTotal)}:${addZero(secondsTotal)}`;

        audioProgressTiming.Width = (currentTime / duration) * 100;
    })

}