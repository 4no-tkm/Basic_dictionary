"use strict";
// 変数に型付け
let greeting = "Hello, TypeScript!";
let itemCount = 10;
let isAvailable = true;
// 配列に型付け
let scores = [85, 90, 78];
let names = ["Alice", "Bob", "Charlie"];
// 関数に型付け
function addNumbers(a, b) {
    return a + b;
}
function logMessage(message) {
    console.log(message);
}
/*
    型推論の例（初期値から型を自動で判断してくれる）
    let price = 2500; price: number と推論される
    price = "two thousand five hundred"; // <-- ここでエラーが出ることを確認！
*/
console.log(greeting);
console.log(`合計: ${addNumbers(itemCount, 5)}`);
logMessage(`最初のスコア: ${scores[0]}`);
