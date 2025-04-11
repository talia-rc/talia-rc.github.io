/*
let userName = prompt("What's your name?", "Your Name");
console.log(`Hi there, ${userName}. This is a calculator to calculate circumference and area of a circle`);
//console.log("User's name is " + userName);


// basic circle calculator
let radius = prompt("What's the radius of your circle?", 0);

const pi = 3.14159;
let area = pi*(radius**2);
let circumference = pi*(radius*2);

console.log(`With a radius of ${radius} \n
    The Area of the Circle is: ${area} \n
    The Circumference of the Circle is ${circumference}`); */

// basic objects + arrays

/*
// objects are containers within containers
let petInfo= [
    {
    petName: "Siggy",
    petType: "Cat",
    petAge: 3
    },
    {
    petName: "Mylo",
    petType: "Cat",
    petAge: "3"
    }
];

// calls on petInfo object in 0 position compared to petInfo object in 1 position
// and property petAge
console.log(petInfo[0].petAge == petInfo[1].petAge);
console.log(petInfo[0].petAge === petInfo[1].petAge); */

// basic methods

let todaysDate = new Date();
console.log(todaysDate.getMonth());

let objectSample = {
    name: "talia",
    pet: "cat"
}

let properties = Object.entries(objectSample);

console.log(properties);
