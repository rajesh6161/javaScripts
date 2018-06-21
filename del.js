function getProperty(obj, key) {
 
    return getProperty;
    // your code here
  }
  console.log( getProperty('hello', 'world'));

  function divide(new1, new2) {
      return (new1/new2);
  }
  console.log(divide(4,2));
 
  const number = 5;

if (number>=10) {
  console.log('true')
} else {
  console.log('false')
}

//maths
const a =1+8;
const b =3*22;
const c =5%4; //to get remainder
const d =a-17;
const e =a+b+c+d;

console.log({a, b, c, d, e});

var name = "loops";
for(x=0; x < 5; x++){
  console.log(name);
}
//conversion
function convertToF(celsius) {
  let fahrenheit = celsius*(9/5)+32;
  return fahrenheit;
}
console.log(convertToF(-40));

var myName = "Rajesh Ranjan"
console.log(myName.length);
//////////////////////////////////////////////////////////////////////////////////
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
console.log(compareEquality(10, 20));
