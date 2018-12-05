'use strict';
function createMyObject() {
  const myObject = {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() {
      return 'hello';
    }
  };
  return myObject;
}

function updateObject(obj) {
  obj.foo='foo';
  obj.bar= 'bar'; 
  obj.bizz= 'bizz'; 
  obj.bang= 'bang'; 
  return obj;
}
  
function personMaker(){
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',

    fullName: function(){
      return `${this.firstName} ${this.lastName}`;
    }
  };
  return person;
}

function keyDeleter(obj){
  delete obj.foo;
  delete obj.bar;
  return obj;
}


function makeStudentsReport(data) {
  let newArray =[];
  for (let i = 0; i < data.length; i++) {
    let student = data[i];
    //               data[i].name     data[i].grade
    newArray.push(`${student.name}: ${student.grade}`);
  }
  return newArray;
}

function enrollInSummerSchool(students){
  for(let i=0; i< students.length; i++){
    students[i].status = 'In Summer school';
  }
  return students;
}




