const h1 = document.querySelector('.helloworld')
h1.textContent = "bye world"

const h2 = document.querySelector ('#helloworld')
h2.textContent = " Renu"

const button = document.getElementsByTagName("button")[0]
button.textContent = ' Sam'

button.addEventListener('click',function(){
  h1.textContent = "Sam"
  let newParagraph = document.createElement('p')
  newParagraph.textContent = "Jay Siya Ram"
  document.body.appendChild(newParagraph)
  h1.style.color = ' red'
})