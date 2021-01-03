const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate(){

  const now = new Date()

  const seconds = ((now.getSeconds()/60)*360)
  secondHand.style.transform = `rotate(${seconds}deg)`

  const minute = ((now.getUTCMinutes()/60)*360)
  minHand.style.transform = `rotate(${minute}deg)`
  
  const hour = ((now.getHours()/12)*360)
  hourHand.style.transform = `rotate(${hour}deg)`
  
  console.log(now.getUTCHours())

}

setInterval(setDate, 1000);