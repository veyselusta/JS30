window.addEventListener('keydown',function(e){
  const audio = document.querySelector(`audio[data-key="${e.key}"]`)
  try{
    audio.play()
  }
  catch{
    throw new Error('You hit wrong key')
  }
})