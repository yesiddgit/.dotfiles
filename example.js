// TODO FIXME XXX TBD Sieve of Eratosthenes
import defaultExport from "module-name";
export class ClassName {...}
function eratosthenes(limit) {
  var primes = [];
  if (limit >= 2) {
    var sqrtlmt = Math.sqrt(limit) - 2;
    var nums = new Array(); // start with an empty Array.
    for (var i = 2; i <= limit; i++)
      nums.push(i);
    for (var i = 0; i <= sqrtlmt; i++) {
      var p = nums[i]
      if (p)
        for (var j = p * p - 2; j < nums.length; j += p)
          nums[j] = 0;
    }
    for (var i = 0; i < nums.length; i++) {
      var p = nums[i];
      if (p)
        primes.push(p);
    }
  }
  return primes;
}
let boolean = true;

! var primes = Eratosthenes(100);

! var x = 2;

console.log(typeof 42);
console.log('An array of the prime numbers from 0 to 100: '+ primes);

function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try {
    if(x == "") throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10) throw "is too high";
    if(x < 5) throw "is too low";
  }
  catch(err) {
    message.innerHTML = "Error: " + err + ".";
  }
  finally {
    document.getElementById("demo").value = "";
  }
}

class ClassWithStaticMethod {

  static staticProperty = 'someValue';
  static staticMethod() {
    return 'static method has been called.';
  }

}

let regex = /\s[A-Z]|(a-z)/g;

const arrowFunciton => (a, b) => a + b + 100;

const answer = x > 10 ? "greater than 10" : x < 5 ? "less than 5" : "between 5 and 10";

function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);

const obj = {continent: 'Africa', country: 'Kenya', city: 'Nairobi'}
for (let key in obj)
  console.log(key) // output: continent, country, city

calcCircumference = diameter => (
  Math.PI * diameter;
)

let variable1;
let variable2 = variable1  || 'bar';
console.log(variable2 === 'bar');

const odd = [1, 3, 5 ];
const nums = [2 ,4 , 6, ...odd];
console.log(nums); // [ 2, 4, 6, 1, 3, 5 ]

// cloning arrays
const arr = [1, 2, 3, 4];
const arr2 = [...arr];

console.log(ClassWithStaticMethod.staticProperty);
// output: "someValue"
console.log(ClassWithStaticMethod.staticMethod());
// output: "static method has been called."
