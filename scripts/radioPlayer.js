export const radioPlayerInit = () => {

    const radio = document.querySelector('.radio');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioHeaderBig = document.querySelector('.radio-header__big');
    const radioItems = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');
    const audioVolume = document.querySelector('.radio-volume');

    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true;

    const toggleIcon = () => {
        if(audio.paused){
            radio.classList.remove('play');
            radioStop.classList.add('fa-play');
            radioStop.classList.remove('fa-stop');
        }else{
            radio.classList.add('play');
            radioStop.classList.remove('fa-play');
            radioStop.classList.add('fa-stop');
        }
    }

    const togglePlay = () => {
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
        }
    }

    const selectItem = (parent) => {
        radioItems.forEach(item => item.classList.remove('select'));
        parent.classList.add('select');
    }
    radioNavigation.addEventListener('change', event => {
        const target = event.target;
        const parent = target.closest('.radio-item');
        selectItem(parent);

        const title = parent.querySelector('.radio-name').textContent;
        radioHeaderBig.textContent = title;

        const urlImg = parent.querySelector('.radio-img').src;
        radioCoverImg.src = urlImg;

        audio.src = target.dataset.radioStantion;
        audio.volume = audioVolume.value / 100;
        
        audio.play();
        radioStop.disabled = false;

    })

    audioVolume.addEventListener('input', () => {
        const value = audioVolume.value;
        audio.volume = value / 100;
    })

    radioStop.addEventListener('click', () => togglePlay())

    audio.addEventListener('play', () => toggleIcon());
    audio.addEventListener('pause', () => toggleIcon());

    return audio;

}