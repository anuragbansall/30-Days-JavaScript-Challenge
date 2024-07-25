// Task9
const ulList = document.querySelector('#ul-list')
ulList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        console.log(e.target.textContent);
    }
})

// Task10
const parent = document.querySelector('#parent')
const child = document.createElement('div')
child.classList.add('child')
parent.append(child)

parent.addEventListener('click', function(e){
    if(e.target.className === "child"){
        console.log('Clicked!');
    }
})