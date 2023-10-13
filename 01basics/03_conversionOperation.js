// let score = "33abc"
//  let score = null
// console.log(typeof score); // number
// console.log(typeof(score)); // string

// convert value

// let valueinNumber = Number(score) 
// console.log(typeof (valueinNumber)); // number

// console.log(valueinNumber);   // 23ad  it will give NaN nota number
// console.log(typeof (valueinNumber)); // number // for null it give after convert 0 

// converting to a Number
// '33' == 33
// '233za' == NaN
// true = 1, false = 0
// null = 0 
// undefined = NaN

// let islogged = 1
// let islogged = ''
// let converttobool = Boolean(islogged)
// console.log(converttobool)  //  1 true, for  '' false on empty, for 0 false

// let stringconvert ="iloveyou" // NaN
// let convertstring = Number(stringconvert)
// console.log(convertstring);

// let Numberc = 23
// let convertString = String(Numberc)
// console.log(convertString);  // string
// console.log(typeof (convertString)); // string


//  ******************************      Operations   **************************************

// let value = 3
// let negativevalue = -value
// console.log(negativevalue); // -3 value is the output

// console.log(2+9);
// console.log(2-1);
// console.log(2*3);
// console.log(2**5);  // it is for power 
// console.log(2%10);
// console.log(2/8);


let str1 = "Abdal"
let str2 = " Ahmad"

let str3 = str1+ str2 // only add happen in string
console.log(str3 );

// console.log(1+1); // 2
// console.log("1"+"1");// 11

// console.log("2"+1); // 21
// console.log(2+"1"); // 21
// console.log("1"+1+2); //112
// console.log(1+1+"2"); // 22
// console.log((3+4)*5%3);  // use bracket
// console.log(+true);   // 1
// console.log(+""); // 0

// let num1, num2, num3;
// num1= num2=num3 = 3*2; 

// postfix  returns the value before(first print) incrementing.
let x =3
let y = x++;
console.log(y);  //  first print then increment

let x2 = 3n;
let z = x2++;
console.log(z); // 

// prefix       returns the value after(then print) incrementing.

let q = 3;
let u = ++q;
console.log(u);

let q2 = 3;
let u2= ++q2;
console.log(u2);   // first increment then print