const personForm = document.querySelector('form#personForm')

function handleSubmit(ev){
  ev.preventDefault()
  
  const details = document.querySelector('#details')
  const f = ev.target

  const person = {
    name: f.personName.value,
    // Get HTML from colored div returned by renderColor 
    favoriteColor: renderColor(f.personFavColor.value).outerHTML,
    age: f.age.value,
  }

  details.appendChild(renderList(person))
}

function renderList(personData){
  const list = document.createElement('ul')
  // Loop over ['name', 'favoriteColor', 'age']
  Object.keys(personData).map(function(fieldName){
    const li = renderListItem(fieldName, personData[fieldName])
    list.appendChild(li)
  })
  return list
}

function renderListItem(fieldName, value){
  const li = document.createElement('li')
  li.innerHTML = `${fieldName}: ${value}`
  return li
}

function renderColor(color){
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '100px'
  colorDiv.style.height = '50px'
  return colorDiv
}

personForm.addEventListener('submit', handleSubmit)