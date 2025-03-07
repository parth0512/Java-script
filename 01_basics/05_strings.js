const name = "Roni"
const repoCount = 6

//comsole.log(name+ repoCount + "Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Parth-pk-com')


// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
//console.log(newString);

const anotherString = gameName.slice(-6,4); //can give negative values too
//console.log(anotherString);

const newString1 = "  parth    ";

//console.log(newString1.trim());

const url = "https://parth.com/parth%20patel"


// console.log(url.replace('%20','-'));

// console.log(url.includes('parth'));

console.log(gameName.split('-'));