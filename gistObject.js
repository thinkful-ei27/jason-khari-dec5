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
//console.log(`A Hobbit's fourth meal is ${fullMealList.meals[3]}.`);

// 4. Arrays of Objects
let theArray = [
  {name: 'Harry', jobTitle: 'Auror'},
  {name: 'Hermione', jobTitle: 'Minister of Magic'},
  {name: 'Ron', jobTitle: 'Stay at home father'}
];

//theArray.forEach(function(object) {
//  console.log(`Name: ${object.name}, Job Title: ${object.jobTitle}`);
//});


//5. Properties that aren't there
for(let i=0; i<theArray.length; i++){
  if(theArray[i].jobTitle !== 'boss'){
    theArray[i].boss = 'Khari';
  }
}
//theArray.forEach(function(object) {
//  if(object.hasOwnProperty('boss')){
//    console.log(`${object.jobTitle} ${object.name} reports to ${object.boss}.`);
//  } else {
//    console.log(`${object.jobTitle} ${object.name} doesn't report to anybody`);  
//  }
//});

//6. Cracking the code
function decode(word){
  if(word[0] ==='a' || word[0] ==='b' || word[0] ==='c' || word[0] ==='d'){
    var letterIndex = cipher[word[0]]-1;
    return word[letterIndex];
  } else{
    return ' ';
  }
}
var cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};
function decodeWords(secret){
  var message = '';
  var decript = secret.split(' ');

  decript.forEach(word => message += decode(word));

  return message;
}

console.log(decodeWords('craft block argon meter bells brown croon droop'));

