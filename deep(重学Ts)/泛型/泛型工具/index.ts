/**
 * 1.为了方便，TypeScript 内置了一些工具类型：Partial  Required  Readonly  Record ReturnType
 */

// 1. typeof  获取变量类型
// 2. keyof 获取对象所有的Key  组成联合类型
type K = keyof { name: 1 }; // "name"
type K2 = keyof { name: 1; vale: 1 }; // "name"

let k: K = "name";

console.log(`k`, k);

// 3 in  遍历联合和枚举类型
enum YY {
  Y,
  X,
}
type Obj = {
  [key in YY]: any;
};

let obj: Obj = { 0: 0, 1: 1 };
console.log(`object`, obj);

// infer  声明一个变量 并将变量加以利用，类型分发  ReturnType 和Parameters
type R1<T> = T extends (...args: any[]) => infer R ? R : any;

type C<T> = T extends (name: infer R) => number ? R : any;

let aR: R1<1> = 1;

//  instanceof
// Partial
