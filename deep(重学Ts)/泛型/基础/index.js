/**
 * 目的：在成员之间提供有意义的约束：类的方法，成员，函数参数，返回值
 *
 * 泛型：类型参数化， 类型可以通过传参指定，进而进行一些有意义的约束
 */
var sayHello = function () { return ""; };
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var printName = function (c) {
    console.log("c", c);
    return "";
};
printName("zhangShan");
// 常用的泛型变量   T  K  V  E
