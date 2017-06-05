const personForm = document.querySelector('form#personForm')

function handleSubmit(ev){
  ev.preventDefault()
  
  const f = ev.target
  const name = f.personName.value
  const dob = f.personDOB.value
  const favColor = f.personFavColor.value

  document.querySelector('h1').textContent = name + ', Date of Birth: ' + dob
  document.querySelector('p#blank').textContent = 'Hi, my name is ' + name + ', and I was born on ' + dob
  
  const favColorParagraph = document.querySelector('p#favColor')
  favColorParagraph.style.color = favColor;
  favColorParagraph.style.fontStyle = 'italic'
}

personForm.addEventListener('submit', handleSubmit)