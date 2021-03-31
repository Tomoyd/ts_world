/**
 * 目的：在成员之间提供有意义的约束：类的方法，成员，函数参数，返回值
 *
 * 泛型：类型参数化， 类型可以通过传参指定，进而进行一些有意义的约束
 */

// 1. 泛型接口

interface InterFaceGeneric<T> {
  (arg: T): T;
}

const sayHello: InterFaceGeneric<string> = () => "";

// 泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
// 泛型函数
type Name<T> = (a: T) => T;
let printName: Name<string> = (c: string) => {
  console.log(`c`, c);
  return "";
};

printName("zhangShan");
// 常用的泛型变量   T  K  V  E
