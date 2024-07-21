// Task8
let obj = {
    name: "Anurag Bansal",
    age: 18,
    printDetails(){
        console.log(`${this.name} is ${this.age} year old.`);
    }
}
console.log(obj);

// Task9
let prop1 = "name"
let prop2 = "age"

let obj2 = {
    [prop1]: "Anurag",
    [prop2]: 18
}
console.log(obj2);