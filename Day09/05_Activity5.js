// Task9
const p = document.querySelector('#p')
const button = document.querySelector('#btn')

button.addEventListener("click", function(){
    p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perferendis distinctio ea quasi pariatur esse maxime sequi qui obcaecati aspernatur similique illo unde, officia molestias vitae laboriosam voluptatum, modi cupiditate.'
})

// Task10
const box = document.querySelector('.box')
box.addEventListener('mousemove', function(){
    const randomColor = generateColor()
    box.style.border = `2px solid ${randomColor}`
})

function generateColor(){
    const hexValues = "0123456789ABCDEF"
    let hexColorCode = '#'
    for(let i=0; i<6; i++){
        let randomIdx = Math.floor(Math.random()*15)
        hexColorCode += hexValues[randomIdx]
    }

    return hexColorCode
}