let kelvin = 293;//change here
//kelvin is intialised with value of 293
let celsius = kelvin - 273;
//c = k -273
let fahrenheit;
fahrenheit = celsius * (9/5) + 32;
//Above is the basic formula
fahrenheit = Math.floor(fahrenheit);
//convertin  decimal to whole number by using floor
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

