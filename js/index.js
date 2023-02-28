const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')
const counter = document.querySelector('.counter')
let sum = 0
decrease.addEventListener('click', (event)=>{
  if(event.target.innerHTML == 'DECREASE'){
    sum = sum -=1
    counter.textContent = sum
  }
  if(sum < 0){
    counter.style.color = `red`
  } else if(sum==0){
    counter.style.color = `black`
  }
})
reset.addEventListener('click', (event)=>{
  if(event.target.innerHTML == 'RESET'){
    sum = 0
    counter.textContent = sum
  }
  if(sum == 0){
    counter.style.color = `black`
  }
})
increase.addEventListener('click', (event)=>{
  if(event.target.innerHTML == 'INCREASE'){
    sum = sum += 1
    counter.textContent = sum
  }
  if(sum > 0){
    counter.style.color = `green`
  } else if(sum==0){
    counter.style.color = `black`
  }
})