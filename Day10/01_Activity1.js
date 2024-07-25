// Task1
const para = document.querySelector('#para')
const changeBtn = document.querySelector('#change-btn')
changeBtn.addEventListener('click', function(){
    para.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure quas repellendus, illo harum quae! Culpa aut accusantium provident fugiat.'
})  

// Task2
const img = document.querySelector('img')
img.addEventListener('dblclick', function(){
    this.classList.toggle('displayNone')
})