
function playSound(e)
{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    /*or you could sset a  timer like this but the time must be same with that in the css transition
    setTimeout(function () {
        
    }, 0.07)*/
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;//skip if it's not a transform
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown',playSound);