"use strict";
//　インターフェースを用いたオブジェクトの宣言
const laptop = {
    id: 101,
    name: "高性能ノートPC",
    price: 120000,
    createdAt: new Date()
};
// laptop.createdAt = new Date; <= これはエラーになるはず
const mouse = {
    id: 102,
    name: "ワイヤレスマウス",
    price: 3000,
    description: "快適な操作性",
    createdAt: new Date()
};
console.log(laptop.name);
console.log(mouse.description);
const user1 = {
    id: "abc-123",
    username: "john_doe",
    status: "active"
};
const user2 = {
    id: 456,
    username: "jane_smith",
    status: "pending"
};
// const user3: User = { id: 789, username: "test", status: "invalid"}; <= これはエラーなはず
console.log(`User 1 status: ${user1.status}`);
