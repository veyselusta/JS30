const input = document.querySelectorAll('.controls input')

function handle(){
  console.log(this.value)
}

input.forEach(input=>input.addEventListener('change',handle))