
  function playSound(e){

  const audio = document.querySelector(`audio[data-key="${e.key}"]`)
  const key = document.querySelector(`div[data-key="${e.key}"]`)

  try{
    audio.play()
    audio.currentTime = 0
    key.classList.add('playing')
  }
  catch {
    alert('You hit the wrong key')
    }
  }

  function removeTransation(e){
    try{
      if(e.propertyName == !'transform') throw new Error()
      this.classList.remove('playing')
    }
    catch(err){
      alert(err)
    }
   }

  const keys = document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend', removeTransation))

  window.addEventListener('keydown',playSound)

  