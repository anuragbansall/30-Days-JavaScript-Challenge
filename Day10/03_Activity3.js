// Task5
const input = document.querySelector('#input-field')
input.addEventListener('keydown', function(e){
    console.log(e.key);
})

// Task6
input.addEventListener('keyup', function(){
    console.log(this.value);
})