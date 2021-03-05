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

! var primes = eratosthenes(100);

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

let obj = new Object

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


/* 
 * Crear una función que reciba la temperatura en grados celsius y la convierta a 
 * grados fahrenheit
 */
let convertToF = celsius => (celsius * 9/5) + 32;
let fah = convertToF(-14);

/*
 * Crear una función que tome un texto y lo devuelva al revés
 */
let reverseString = str => {
  let newStr = "";
  for (let i = str.length -1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
let reverseWord = reverseString("Hello");

/*
 * Crear una función que reciba un número y devuelva su factorial
 */
let factorialize = num => {
  let factor = 1;
  for (let i = 1; i <= num; i++) {
    factor *= i;
  }
  return factor;
}
let factor = factorialize(20);

/* 
 * Crear una función que tome una frase y devuelva la longitud de la palabra más
 * larga.
 */
let longestWord = text => {
  text = text.split(' ');
  let maxLength = 0;
  for (let word of text ) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}
let frase = longestWord("The quick brown frox jumped over the lazy dog");

/*
 * Crear una función que tome un arreglo compuesto y devuelva un nuevo arreglo
 * con los números mayores de cada subarreglo.
 */
let largestOfFour = arr => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    result.push(largestNumber);
  }
  return result;
}
let losMayores = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/* 
 * Crear una función que reciba una cadena de texto y una letra, y verifique si
 * la cadena de texto termina en esa letra.
 */
let confirmEnding = (str,target) => {
  let regex = new RegExp(target + "$", "ig");
  return regex.test(str);
}
let stringEnd = confirmEnding("Bastian", "s");

/*
 * Crear una función que reciba una cadena de texto y un número, y que devuelva
 * la cadena de texto repetida el número de veces dado.
 */
function repeatStringNumTimes(str,num) {
  let result = "";
  while (num > 0) {
    result += str;
    num--;
  }
  return result;
}
let repeatMe = repeatStringNumTimes("abc", 3);

/* 
 * Crear una función que reciba una cadena y un número, verifique si la cadena
 * es más larga que ese número y devuelva de la cadena la cantidad de letras
 * igual al número y el resto lo reemplace por ...
 */
let truncateString = (str, num) => {
  let resultStr = str.slice(0, num);
  if (num < str.length) {
    resultStr += "...";
  }
  return resultStr;
}
let cutString = truncateString("A-tisket a-tasket A green and yellow basket", 8);

/* 
 * Crear una función que reciba un arreglo y una condición, y devuelva el
 * elemento(s) que cumpla con la condición. Si ninguno cumple con la condición
 * devolver undefined.
 */
let findElement = (arr, func) => arr.find(func);
let findMe = findElement([1,3,5,8,9,10], num => num % 2 === 0);

/* 
 * Crear una función que reciba un valor y verifique si su tipo es buleano puro
 */
let booWho = bool => typeof bool === "boolean";
let amI = booWho(false);

/* 
 * Crear una función que tome una cadena de texto y la devuelva con cada primera
 * letra en mayúscula (Title Case).
 */
let titleCase = str => str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
let caseMe = titleCase("this is an example");

/* 
 * Crear una función que reciba dos arreglos y un número, y devuelva un arreglo
 * que contenga los dos arreglos, pero con los elementos del segundo arreglo
 * incrustados en la posición del primero, que establezca el número recibido.
 */
let frankenSplice = (arr1, arr2, n) => {
  let arrCopy = arr2.slice();
  arrCopy.splice(n, 0, ...arr1);
  return arrCopy;
}
let combine = frankenSplice([1, 2, 3], [4, 5, 6], 1);

/* 
 * Crear una función que reciba un arreglo y remueva todos los valores "falsy"
 * (false,null,0,"",undefined,NaN) que haya.
 */
let bouncer = arr => arr.filter(Boolean);
let noFalsy = bouncer([7, "ate", "", false, 9]);

/* 
 * Crear una función que reciba un arreglo y un número, y devuelva un nuevo
 * arreglo ordenado y con el número en la posición que corresponde.
 */
let getIndexToIns = (arr, num) => {
  arr.sort((one, two) => one - two);
  let i = 0;
  while (num > arr[i]) {
    i++;
  }
  return i;
}
let index = getIndexToIns([40, 60], 50);

/* 
 * Crear una función que reciba dos palabras y verifique que ambas poseen las
 * mismas letras.
 */
const mutation = ([a, b], i = 0) => {
  a.toLowerCase();
  b.toLowerCase();
  return i >= b.length ? true : !a.includes(b[i]) ? false : mutation([a, b], i + 1);
}
let sameLetters = mutation(["hello", "pello"]);

/* 
 * Crear una función que reciba un arreglo y un número, y devuelva un arreglo
 * nuevo que tenga divido el arreglo original en varios subarreglos cuya
 * longitud sea definida por el número recibido.
 */
let chunkArrayInGroups = (arr, size) => {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
let chunk = chunkArrayInGroups(["a", "b", "c", "d"], 2);

/* 
 * Crear una función que reciba un arreglo con dos números y sume todos los
 * números que hay entre los dos.
 */
let sumAll = arr => {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}
let sum = sumAll([10,5]);

/* 
 * Crear una función que reciba dos arreglos y devuelva un arreglo con los
 * elementos que no se encuentran repetidos en los dos arreglos originales.
 */
let diffArr = (arr1, arr2) => {
  return arr1
    .concat(arr2)
    .filter(ele => !arr1.includes(ele) || !arr2.includes(ele));
}
let sol = diffArr([1, 2, 3, 5], [1, 2, 3, 4, 5, 6]);

/* 
 * Crear una función que reciba un arreglo y una serie de elementos, y devuelva
 * un nuevo arreglo sin los elementos pasados como argumentos.
 */
function destroyer (arr) {
  let args = Array.prototype.slice.call(arguments).slice(1);
  return arr.filter(num => !args.includes(num));
}
let destroy = destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);

/* 
 * Crear una función que reciba un arreglo con objetos (arg1) y devuelva un
 * arreglo con los objetos que coincidan (arg2). Cada objeto devuelto debe tener
 * la propiedad y el valor.
 */
let whatIsInAName = (arg1, arg2) => {
  let arr = [], prop = Object.keys(arg2);
  arr = arg1.filter(
    obj => prop.every(key => obj.hasOwnProperty(key) && obj[key] == arg2[key])
  );
  return arr;
}
whatIsInAName([
  { first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }]
  , { last: "Capulet" });

/* 
 * Convertir una frase a Spinal Case.
 * Spinal case: todas-las-palabras-en-minúsculas-unidas-por-guiones
 */
let spinalCase = str => str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
let spinalFrase = spinalCase('This Is spinal_Tap');

/*
 * Alterar una palabra en modo Pig Latin:
 * Si la palabra empieza con consonante, toma la primera consonante o grupo de
 * consonantes y las mueve al final, y agrega "ay".
 * Si la palabra empieza con vocal, solo agrega "way" al final.
 */
let translatePigLatin = word => {
  return word.match(/^[aeiou]/i) 
    ? word + "way" 
    : word.replace(/(^[^aeiou]+)(\w*)/i, "$2$1ay");
}
let pigWord = translatePigLatin("consonant");

/* 
 *  Buscar y reemplazar una palabra en una frase.
 *  La función recibe una oración, la palabra a reemplazar y la palabra con la
 *  que se va a reemplazar (oración, antes, después)
 */
function myReplace(str, before, after) {
  let result = "";
  /[A-Z]/.test(before.charAt(0))
    ? result = after.charAt(0).toUpperCase() + after.slice(1)
    : result = after.charAt(0).toLowerCase() + after.slice(1);
  return str.replace(before, result);
}
let rp = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

/* 
 * Emparejamiento de ADN. 
 * La función toma una cadena de texto y devuelve un nuevo arreglo con el par
 * que falta.
 * Los emparejamientos son A-T, C-G.
 */
function pairElement(str) {
  let pair = [];
  let pairFind = function(letter) {
    switch (letter) {
      case "A":
        pair.push(["A", "T"]);
        break;
      case "T":
        pair.push(["T", "A"]);
        break;
      case "C":
        pair.push(["C", "G"]);
        break;
      case "G":
        pair.push(["G", "C"]);
        break;
    }
  };

  for (let i = 0; i <= str.length; i++) {
    pairFind(str[i]);
  }

  return pair;
}

/*
 * Letras perdidas.
 * Busque la letra que falta en un rango de letras y devuélvala.
 * Si todas las letras existen devuelva undefined.
 */
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) !== str.charCodeAt(0) + i) {
      return String.fromCharCode(str.charCodeAt(i) - 1);
    }
  }
  return undefined;
}
//console.log(fearNotLetter("abcdef"));

/*
 * Crear una función que toma varios arreglos y devuelve un arreglo con todos
 * los elementos de los arreglos, sin repetir elementos y en el orden en el que
 * fueron tomados los arreglos.
 */
function uniteUnique(arr) {
  let arrs = Array.prototype.slice.call(arguments).slice(1);
  for (let i = 0; i < arrs.length; i++) {
    arr.push(arrs[i].filter(ele => !arr.includes(ele)));
  }
  return arr.flat();
}

// const uniteUniques = (..arr) => [...new Set(arr.flat())];
// ...arr toma todos los argumentos que se pasen y los une en un solo arreglo
// la función [...new Set(arr)] borra los elementos repetidos de un arreglo

/*
 * Convertir a código HTML
 * Crear una función que tome una frase y cambie los carácteres por su
 * equivalente en HTML.
 * & = &amp
 * < = &lt
 * > = &gt
 * " = &quot;
 * ' = &apos;
 */
function convertHTML(str) {
  const html = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    '"': "&quot;"
  }
  return str.replace(/([&<>\"'])/g, match => html[match]);
}

/*
 * Sumar todos los números de Fibonacci impares
 * Dado un número entero positivo, devuelve la suma de todos los número de
 * Fibonacci impares menores o iguales a él.
 */
function sumFibs(num) {
  if (num <= 1) return 1;
  let prev = 0, curr = 1, result = 0;
  while (curr <= num) {
    if (curr % 2 !== 0) {
      result += curr;
    }
    curr += prev;
    prev = curr - prev;
  }
  return result;
}

/*
 * Sumar todo los números primos.
 * Dado un número, devuelva la suma de todos los números primos que son menores
 * o iguales al número.
 */
function sumPrimes(num) {
  // función para verificar si es primo
  let isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) return false;
    }
    return true
  }

  // sumar los primos
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

/*
 * Mínimo común múltiplo
 * Encuentre el múltiplo común más pequeño de los parámetros proporcionados que
 * se pueda dividir uniformemente por ambos así como por los número entre el
 * rango de los dos parámetros.
 */
function smallestCommons(arr) {
  // arreglo con todos los números en el rango
  let range = [...Array(Math.max(...arr) - Math.min(...arr) + 1).keys()].map((_, idx) => Math.min(...arr) + idx);
  
  // lcm entre dos números : (a * b) / gcd(a, b)
  // hallar el gcd de dos números
  let gcd = (a, b) => !b ? a : gcd(b, a % b);

  // hallar el lcm de dos números
  let lcm = (a, b) => (a * b) / gcd(a, b);
  
  // comparar de manera recursiva todos los números del rango en pares
  // guardar cada lcm de cada par y computarlos 
  let scm = Math.min(...range);
  range.forEach(num => scm = lcm(scm, num));

  return scm;
}
console.log(smallestCommons([2,10]));

/* 
 * Dado un arreglo y una función hacer que se elimine el primer elemento del
 * arreglo que sea igual al valor de la función.
 */
function dropElements(arr, func) {
  while ( !func(arr[0]) ) {
    arr.shift()
  }
  return arr;
}
let drop = dropElements([1,2,3,4], n => n >= 3 );

/* 
 * Remover los niveles de un arreglo dado para que quede un arreglo de un solo
 * nivel. No se puede usar flat() o flatMap()
 */
function steamrollArray(arr) {
  let result = [];
  arr.forEach(item => {
    Array.isArray(item)
      ? result.push(...steamrollArray(item))
      : result.push(item)
  });
  return result;
}
//console.log(steamrollArray([1, [[2]], [3, [[4]]]]));

/*
 * Convertir un código binario a una frase o palabras en inglés.
 */
function binaryAgent(str) {
  let arr = [];
  str.split(' ').forEach(binary => {
    let each = parseInt(binary, 2)
    arr.push(String.fromCharCode(each))
  });
  
  return arr.join('');
}
function binaryAgentMap(str) {
  return String.fromCharCode(
    ...str.split(" ").map(function(char) {
      return parseInt(char, 2);
    })
  );
}

/* 
 * Compruebe si el segundo argumento existe en todos los elementos de una
 * colección.
 */
function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

/*
 * Crear una función que sume dos argumentos, pero en caso de solo dar un
 * argumento devolver una función que reciba el número con el cual sumar el
 * primero.
 */
function addTogether() {
  let args = Array.from(arguments);
  return args.some(num => typeof num !== "number")
    ? undefined
    : args.length > 1
    ? args.reduce((acc, num) => (acc += num), 0)
    : num => typeof num === "number" ? num + args[0] : undefined
}

/*
 * Crear un constructor de persona que tenga las funciones:
 * getFirstName() getLastName() getFullName()
 * setFirstName(first) setLastName(last) setFullName(firstAndLast)
 */
let Person = function(firstAndLast) {
  let fullName = firstAndLast;
  this.getFirstName = () => fullName.split(" ")[0];
  this.getLastName = () => fullName.split(" ")[1];
  this.getFullName = () => fullName;

  this.setFirstName = (first) => fullName = first + " " + fullName.split(" ")[1];
  this.setLastName = (last) => fullName = fullName.split(" ")[0] + " " + last;
  this.setFullName = (firstAndLast) => fullName = firstAndLast;
};

var bob = new Person('Bob Ross');

/*
 * Devuelva una matriz que transforma la altitud promedio de los elementos en
 * sus períodos orbitales.
 * La matriz debe tener el formato: {name: 'name', avgAlt: avgAlt}.
 * El radio de la tierra es 6367,4447 km y el GM es 398600,4418 km³s⁻²
 */
function orbitalPeriod(arr) {
  let GM = 398600.4418,
    earthRadius = 6367.4447,
    result = [];

  let getOrbitalPeriod = (obj) => {
    let a = earthRadius + obj.avgAlt;
    let orbitalPeriod = Math.round((2 * Math.PI) * (Math.sqrt( Math.pow(a, 3) / GM)))
    return {name: obj.name, orbitalPeriod: orbitalPeriod};
  }

  for (let obj in arr) {
    result.push(getOrbitalPeriod(arr[obj]));
  } 
  
  return result;
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);


/* ============================================================================
 * PROYECTOS DE ESTRUCTURA DE DATOS Y ALGORITMOS
 * ========================================================================= */

/* 
 * Validador de palíndromos
 */
function palindrome(str) {
  return str.replace(/[\W_]/g, "").toLowerCase()
  ===
    str.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("");
}

/* 
 * Convertir a números romanos
 */
function convertToRoman(num) {
    let roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"],
    numeral = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000],
    result = "";

  for(let i = numeral.length; i >= 0; i-- ) {
        while(numeral[i] <= num) {
            result += roman[i];
            num -= numeral[i];
        }
    }

    return result;
}

/*
 * Cifrado César (por desplazamiento)
 * Tomar una cadena cifrado ROT13 y devolverla decodificada.
 * ROT13 = desplazar la letra 13 puestos.
 */
function rot13(str) {
  return str.replace(/([a-m])|([n-z])/ig, ($0,$1,$2) => {
    return String.fromCharCode(
      $1 ? $1.charCodeAt(0) + 13
      : $2 ? $2.charCodeAt(0) - 13
      : 0
    ) || $0;
  });
}

/*
 * Validador de número de teléfono USA
 * true: 555-555-5555 (555)555-5555 (555) 555-5555
 *       555 555 5555 5555555555 1 555 555 5555
 */
function telephoneCheck(str) {
  // twicking an anonymous expression from regex101.com
  // accept the char "+" at start
  let regex = 
  /^([+]?1[\s]?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/g;
  return regex.test(str);
}

/* 
 * Caja Registradora
 * Diseñar una función que acepte el precio de compra como primer argumento, el
 * pago como segundo, y el dinero en efectivo tercero.
 * Si el pago es menor al precio devuelve {status: "INSUFICIENT_FUNDS", change:
 * []}
 * Si el pago es igual al precio devuelve {status: "CLOSE", change: []}
 * Si el pago es mayor al precio deveulve {status: "OPEN", change: [...]}
 * El change debe ser en monedas y billetes ordenados de mayor a menor según la
 * matriz del dinero en efectivo.
 */
const units = [
  { name: "ONE HUNDRED", val: 100 },
  { name: "TWENTY", val: 20 },
  { name: "TEN", val: 10 },
  { name: "FIVE", val: 5 },
  { name: "ONE", val: 1 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
]

function checkCashRegister(price, cash, cid) {
  let result = { status: '', change: []};
  let change = cash - price;

  // Get total of a cash
  let total = (cash) => cash.reduce(
    (acc, current) => acc + current[1]
    , 0
  );

  // Validate exact change
  if (change == total(cid)) {
      result.status = 'CLOSED';
      result.change = cid;
      return result;
  }

  // Validate insufficient funds
  if (change > total(cid) ){
      result.status = 'INSUFFICIENT_FUNDS';
      return result;
  }

  // Convert cash-in-drawer to an object for better handle later
  let cidObj = cid.reduce(
    (acc, current) => {
      acc[current[0]] = current[1];
      return acc;
    }, {} 
  );

  // Compare denominations with cash-in-drawer
  let changeResult = units.reduce(
    (acc, current) => {
      let result = 0;
      while(change >= current.val && cidObj[current.name] > 0) {
        change -= current.val;
        cidObj[current.name] -= current.val;
        result += current.val;

        // Round to deal with precision errors
        change = Math.round(change * 100) / 100;
      }
      if (result > 0) acc.push([current.name, result]);
      return acc; 
    }, []
  );

  // Validate if change have a leftover
  if (change > total(changeResult)) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }

  result.status = "OPEN";
  result.change = changeResult;
  return result;
}

