/**
 * TS的一个核心原则是类型检测关注值的形状结构
 * 有时被称为：duck typing,或者structural subtyping(结构子类型)
 * interface 就是用来命名结构化子类型或鸭子类型的，
 * 接口是项目内或者项目外 在代码中定义契约的强大方式
 */
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = { size: 10, label: 'size 10 Obj' };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: 'red', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
// 字面量多余属性检测
createSquare({ color: 'white', width: 200, height: 200, i: 1 });
// 变量子类型即可避免多余属性检测，因为传入变量，不会对多余属性进行检测
var sc = { color: 'blue', width: 20, i: 20 };
createSquare(sc);
var myFunc = function (src, sub) {
    return src.search(sub) > -1;
};
var myArr;
myArr = ['Bob', 'Ann'];
