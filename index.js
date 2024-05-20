let number1 = 3;
let number2 = 5;
console.log(number1*number2);
number1 = 7;
console.log(number1*number2);


let point = 70

if (point >= 80) {
  console.log("素晴らしい");
} else if (point < 80 && point >= 60) {
  console.log("合格です");
} else {
  console.log("不合格です");
}


class User {
  constructor (id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  sayName () {
    console.log(`私の名前は${this.firstName}${this.lastName}です。`);
  }
}
const u1 = new User (1, "太郎", "鈴木", 25);
u1.sayName();


const numberList = [1, 2, 5, 7, 75];

const maxNumber = Math.max(...numberList);
if (maxNumber % 3 === 0) {
  console.log(maxNumber / 3);
} else {
  console.log(maxNumber);
}


let message = "This is a pen";
console.log(message.replaceAll(" ", "-"));


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = numbers.filter((number) => {
  return number % 2 === 0;
})
const numbers5 = [...numbers2.map((number) => {
  return number * 5;
})]
console.log(numbers5);
