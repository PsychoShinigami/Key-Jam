const soundMap = {
    'Q': 'sounds/Q.wav',
    'W': 'sounds/W.ogg',
    'E': 'sounds/E.wav',
    'R': 'sounds/R.wav',
    'A': 'sounds/A.wav',
    'S': 'sounds/S.mp3',
    'D': 'sounds/D.wav',
    'F': 'sounds/F.mp3'
};

function playSound(keyLetter) {
    const soundPath = soundMap[keyLetter.toUpperCase()];
    if (soundPath) {
        const audio = new Audio(soundPath);
        audio.currentTime = 0;
        audio.play();
    }
}

let keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', () => {
        const letter = document.querySelector('.letter').textContent;
        playSound(letter);
        setTimeout(() => {
            key.style.transform = 'translateY(-10px)';
            key.style.filter = 'drop-shadow(0px 0px 5px #00f3ff)';
        }, 100);
    })
})

window.addEventListener('keydown', (event) => {
    const pressedKey = event.key.toUpperCase();
    keys.forEach(key => {
        const letter = document.querySelector('.letter');
        if (letter === pressedKey){
            playSound(pressedKey);
            setTimeout(() => {
                key.style.transform = 'translateY(-10px)';
                key.style.filter = 'drop-shadow(0px 0px 5px #00f3ff)';
            }, 100);
        };
    });
});