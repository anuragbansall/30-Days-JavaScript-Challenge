// Task4
let day = 5
switch(day){
    case 1: 
        console.log("Monday");
        break
    case 2:
        console.log("Tuesday");
        break
    case 3:
        console.log("Wednesday");
        break
    case 4:
        console.log("Thursday");
        break
    case 5:
        console.log("Friday");
        break
    case 6:
        console.log("Saturday");
        break
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day!");
}

// Task5
let score = 80
switch(true){
    case (score>=90):
        console.log("Grade: A");
        break
    case (score>=70):
        console.log("Grade: B");
        break
    case (score>=50):
        console.log("Grade: C");
        break
    case (score>=30):
        console.log("Grade: D");
        break
    case (score>=0):
        console.log("Grade: F");
        break
    default:
        console.log("Invalid Score!");
}