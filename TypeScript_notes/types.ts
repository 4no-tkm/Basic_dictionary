// インターフェースの定義
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string; // ?はプロパティの値があってもなくてもよい
    readonly createdAt: Date // readonly 初期化度は変更不可
}

//　インターフェースを用いたオブジェクトの宣言
const laptop: Product = {
    id: 101,
    name: "高性能ノートPC",
    price: 120000,
    createdAt: new Date()
};

// laptop.createdAt = new Date; <= これはエラーになるはず

const mouse: Product = {
    id: 102,
    name: "ワイヤレスマウス",
    price: 3000,
    description: "快適な操作性",
    createdAt: new Date()
};

console.log(laptop.name);
console.log(mouse.description);

type UserID = string | number; // string型またはnumber型のどちらかを表すユニオン型
type UserStatus = "active" | "inactive" | "pending"; // 特定の文字列リテラルのみを許可するユニオン型

interface User {
    id: UserID;
    username: string;
    status: UserStatus;
}

const user1: User = {
    id: "abc-123",
    username: "john_doe",
    status: "active"
};

const user2: User = {
    id: 456,
    username: "jane_smith",
    status: "pending"
};

// const user3: User = { id: 789, username: "test", status: "invalid"}; <= これはエラーなはず

console.log(`User 1 status: ${user1.status}`);