window.addEventListener('keydown',function(e){
  const audio = document.querySelector(`audio[data-key="${e.key}"]`)
  const key = document.querySelector(`div[data-key="${e.key}"]`)

  try{
    audio.play()
    audio.currentTime = 0
    key.classList.add('playing')
  }
  catch {
    alert('You hit wrong key')
  }

})