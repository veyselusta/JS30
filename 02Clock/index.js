const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')


function setDate(){
  const now = new Date()

  const seconds = ((now.getSeconds()/60)*360)
  secondHand.style.transform = `rotate(${seconds}deg)`

 
  

}

setInterval(setDate, 1000);