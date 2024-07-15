let name = "Anurag"
let age = 18
let isMale = true
let height = null
let weight
let hobbies = ["Coding", "Reading", "Games"]
let marks = {
    Programming: 98,
    English: 95,
    Maths: 90 
}

console.table({[name]: typeof name, [age] : typeof age, [isMale]: typeof isMale, [height]: typeof height, [weight]: typeof weight, [hobbies]: typeof hobbies, [marks]: typeof marks})


// Difference between var, let, const

/*
    var - var is an old way of declaring variables (ES-5). Variables declared using var keyword has global scope, and also follows the concept of hoisting.

    let - let is a new way of declaring variables (ES-6). let has local scope, and does not follow hoisting

    const - const is a way of declaring constants, constant can't be re-assign
*/