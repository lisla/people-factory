const PeopleFactory = {

  init: function(formSelector){
    const form = document.querySelector(formSelector)
    form.addEventListener('submit', this.handleSubmit.bind(this))
  },

  renderColor: function(color){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '100px'
    colorDiv.style.height = '50px'
    return colorDiv
  },

  renderListItem: function(fieldName, value){
    const li = document.createElement('li')
    li.innerHTML = `${fieldName}: ${value}`
    return li
  },

  // Can also use 'renderList(personData)'
  renderList: function(personData){
    const list = document.createElement('ul')
    // Loop over ['name', 'favoriteColor', 'age']
    Object.keys(personData).map((fieldName) => {
      const li = this.renderListItem(fieldName, personData[fieldName])
      list.appendChild(li)
    })
    return list
  },

  handleSubmit: function(ev){
    ev.preventDefault()
    
    const details = document.querySelector('#details')
    const f = ev.target

    const person = {
      name: f.personName.value,
      // Get HTML from colored div returned by renderColor 
      favoriteColor: this.renderColor(f.personFavColor.value).outerHTML,
      age: f.age.value,
    }
    details.appendChild(this.renderList(person))
  },

}

PeopleFactory.init('form#personForm')

