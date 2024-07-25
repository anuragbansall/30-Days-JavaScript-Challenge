// Task7
const form = document.querySelector('#form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log(form.children[0].value);
    console.log(form.children[1].value);
})

// Task8
const para = document.querySelector('#para')
const dropDown = document.querySelector('#dropdown')

dropDown.addEventListener('change', function(){
    para.innerHTML = this.value
})