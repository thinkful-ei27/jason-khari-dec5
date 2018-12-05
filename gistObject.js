'use strict';

// 1. Object initializers and methods
let loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return (this.water/this.flour)*100;
  }
};
//console.log(loaf.water);
//console.log(loaf.flour);
//console.log(loaf.hydration());

// 2. Iterating over an object's properties
let mumbler = {
  foo: 'foo value',
  bar: 'bar value',
  fum: 'fum value',
  quux: 'quux value',
  spam: 'spam value'
};
//for(const key in mumbler){
// console.log(`${key}: ${mumbler[key]}`);
//}

// 3. Arrays in objects
const fullMealList = {
  meals: [
    'breakfast', 'second breakfast', 
    'elevenses', 'lunch', 'afternoon tea',
    'dinner', 'supper'
  ]
};
console.log(`A Hobbit's fourth meal is ${fullMealList.meals[3]}.`);

// 4. Arrays of Objects
let theArray = [
  {name: 'Harry', jobTitle: 'Auror'},
  {name: 'Hermione', jobTitle: 'Minister of Magic'},
  {name: 'Ron', jobTitle: 'Stay at home father'}
];

theArray.forEach(function(object) {
  console.log(`Name: ${object.name}, Job Title: ${object.jobTitle}`);
});
