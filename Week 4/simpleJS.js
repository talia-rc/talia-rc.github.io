// defining variables

let numExample = 50;
var stringExample = "I'm a string";

// never changes
const pi = 3.14159;

//console.log(`The variable numExample has the value of ${numExample}`);
//console.log(typeof stringExample);

let arrayExample = ["1", 1, "0", 0];

const objectExample = {
    // property name
    name: "talia",
    petName: "mushu",
    bothTogether: function(){
        return this.name+this.petName
    }
}
//console.log(objectExample.bothTogether());

let multiplicationExample = 50 * 2;
let divisionExample = 50/2;
let squaredExample = 10 ** 2;
let moduloExample = 11%2;

// \n signifies new line (does not recognize enter)
console.log(`Multiplication Example: ${multiplicationExample} \n
    Division Example: ${divisionExample} \n
    squaredExample: ${squaredExample} \n
    Modulo Example: ${moduloExample} \n `)

// logical operators
    // ! not/inverse
console.log(numExample != 66);

// basic add (&&) and or (||)
console.log(numExample > 40 && numExample < 60);


//let changeType = "1";
//let mathTest = 1;

// = same number OR === same type
// console.log(mathTest = changeType);

//console.log(typeof changeType);

//changeType = 1;
//console.log(typeof changeType);