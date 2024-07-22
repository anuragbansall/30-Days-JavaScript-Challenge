// Task3
const div = document.createElement('div')
const text = document.createTextNode("This is a div")
div.appendChild(text)
document.body.appendChild(div)

// Task4
const li = document.createElement('li')
li.innerHTML = "This is a li"
const ul = document.querySelector('#ul')
ul.appendChild(li)