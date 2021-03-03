// Sieve of Eratosthenes

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
