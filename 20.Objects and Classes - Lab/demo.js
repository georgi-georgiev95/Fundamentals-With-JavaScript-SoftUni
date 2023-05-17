//objects:

//firstWay;
let person = {
    name: 'Peter',
    age: 20,
    height: 183
};

//secondWay;
let personTwo = {};
personTwo.name = "Misho";
personTwo.age = 25;
personTwo.hairColor = 'black';


//methodsOfObjects

//v1
let personThree = {                     
    sayHello: function () {
        console.log("Hi, guys");
    }
}

//v2
let personThree2 = {
    sayHello() {
       console.log("Hi, guys"); 
    }
}

//v3
let personThree3 = { name: "Peter", age: 20, grade: '5.50' };
personThree3.sayHello = () => console.log("Hi, guys");

Object.keys(personThree3); // ['name', 'age', 'grade'];
Object.values(personThree3); // ['Peter', '20', '5.50'];
Object.entries(personThree3); // [['name', 'Peter'], ['age', '20'], ['grade', '5.50']];

for (const key of Object.keys(personThree3)) {
    console.log(`${key} : ${personThree3[key]}`);
}


