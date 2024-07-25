// Task3
const elem = document.querySelector('#elem')
elem.addEventListener('mouseover', function(){
    this.style.backgroundColor = 'crimson'
})

// Task4
elem.addEventListener('mouseout', function(){
    this.style.backgroundColor = 'transparent'
})