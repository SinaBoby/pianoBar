window.addEventListener('keydown', playSound);
function playSound(e) {
  //console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const keys = document.querySelectorAll('.key');

  if (!audio) return; //stop the function from running

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');

  function removeTransition(e) {
    if (e.propertyName !== 'transform') {
      e.target.classList.remove('playing');
    }
  }
  keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition);
  });
}
const keys = document.querySelectorAll('.key');
console.dir(keys);
keys.forEach((key) => {
  key.addEventListener('touchstart', play);
});
//window.addEventListener('touchstart',play);
function play(e) {
  console.log(e.target.closest('.key'));
  let key = e.target.closest('.key');
  console.log(key);
  console.log(key.dataset.key);
  let audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);
  audio.play();
  key.classList.add('playing');
  function removeTransition(e) {
    if (e.propertyName !== 'transform') {
      e.target.classList.remove('playing');
    }
  }

  keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition);
  });

  e.preventDefault();
}

a;
