const personForm = document.querySelector('form#personForm')

function handleSubmit(ev){
  ev.preventDefault()
  
  const details = document.querySelector('#details')
  const f = ev.target
  const name = f.personName.value
  const age = f.age.value
  const favColor = f.personFavColor.value

  const colorDiv = `
    <div style="background-color: ${favColor}; width: 100px; height: 50px"></div>
  `
  
  // document.querySelector('h1').textContent = name + ', Date of Birth: ' + dob
  // document.querySelector('p#blank').textContent = 'Hi, my name is ' + name + ', and I was born on ' + dob
  
  // const favColorParagraph = document.querySelector('p#favColor')
  // favColorParagraph.textContent = favColor + ' is my favorite color'
  // favColorParagraph.style.color = favColor;
  // favColorParagraph.style.fontStyle = 'italic'

  // const d = document.querySelector('.special')
  // d.style.borderColor = favColor
  // d.style.borderStyle = 'dotted'
  
  // details.innerHTML = `<em>${name}</em>`

  // const em = document.createElement('em')
  // em.textContent = name
  // details.appendChild(em)

  // details.innerHTML = `
  //   <ul>
  //     <li>Name: ${name}</li>
  //     <li>Favorite Color: ${colorDiv}</li>
  //     <li>Age: ${age}</li>
  //   </ul>
  // `

  const ul = document.createElement('ul')
  details.appendChild(ul)

  appendElement(ul, 'li', `Name: ${name}`)
  appendElement(ul, 'li', `Favorite Color: ${renderColor(favColor).outerHTML}`)
  appendElement(ul, 'li', `Age: ${age}`)

}

function appendElement(parent, childType, childContent){
  const el = document.createElement(childType)
  el.innerHTML = childContent
  parent.appendChild(el)
}

function renderColor(color){
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '100px'
  colorDiv.style.height = '50px'
  return colorDiv
}

personForm.addEventListener('submit', handleSubmit)