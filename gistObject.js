'use strict';
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

let mumbler = {
  foo: 'foo value',
  bar: 'bar value',
  fum: 'fum value',
  quux: 'quux value',
  spam: 'spam value'
};
for(const key in mumbler){
  console.log(`${key}: ${mumbler[key]}`);
}
