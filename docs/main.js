window.addEventListener('keydown', playSound);
function playSound(e) {
  //console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const keys = document.querySelectorAll('.key');

  //console.log(key)
  //console.log(audio);
  if (!audio) return; //stop the function from running
  //console.dir(audio)
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  function removeTransition(e) {
    if (e.propertyName === 'transform') {
      
      e.target.classList.remove('playing');
    }
  }
  keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition);
  });
}