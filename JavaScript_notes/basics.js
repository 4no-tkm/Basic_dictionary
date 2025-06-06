// 変数と定数
const message = "Hello, JavaScript!"; // 定数（再代入不可）
let count = 0; //変数（再代入可能）
count = 1;

// データ型
const name = "Alice"; // String（文字列）
const age = 30; // int（数値）
const isActive = true; // boolean（真偽値）
const hobbies = ["reading", "coding"]; // array（配列）
const user = { name: "Bob", age: 25}; // object（オブジェクト）

// 演算子
const sum = 10 + 5; // 15
const isEqual = (5 === '5'); // false（厳密等価演算子）
const canDrive = (age >= 18 && isActive); // true/false

// 条件分岐
if (age >= 20) {
    console.log("成人です。");
} else {
    console.log("未成年です。");
}

// 繰り返し
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach(num => {
    console.log(num * 2);
})

const doubledNumbers = numbers.map(num => num * 2); // result [2, 4, 6, 8, 10]

// 関数
function greet(name) {
    return `こんにちは、${name}さん！`;
}
console.log(greet("太郎")) // "こんにちは、太郎さん！"

const sayHello = function(name) {
    return `Hello, ${name}!`;
};
console.log(sayHello("次郎"));

const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(3, 4));

const add = (a, b) => a + b; // 省略形
console.log(add(1, 2)); // 3

//クラスとオブジェクト
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`私の名前は${this.name}、${this.age}歳です。`);
    }
}

const alice = new Person("アリス", 28);
alice.introduce(); // "私の名前はアリス、28歳です。"

// 分割代入
const fruits = ["apple", "banana", "cherry"];
const [firstFruit, secondFruit] = fruits; // firstFruit: "apple", secondFruit: "banana"

const userProfile = { userName: "John", userAge: 40};
const { userName, userAge } = userProfile; // userName: "John", userAge: 40

// スプレッド構文
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinedArr = [...arr1, ...arr2]; // [1, 2, 3, 4]

const baseInfo = { name: "Mike", city: "Tokyo" };
const detailesInfo = { ...baseInfo, age: 35 }; // { name: "Mike", city: "Tokyo", age: 35 }

// モジュール
/*
以下utils.jsの内容
export const PI = 3.14;

export function add(a, b) {
    return a + b;
}
*/

import { PI, add } from './utils.js';
console.log(PI);
console.log(add(5, 7));