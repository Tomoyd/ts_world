// Boolean
var isDone = false;
// Number
var decimal = 10;
var hex = 0xff00d0;
var binary = 6;
var octal = 60;
var big = 1000n;
// String
var a = 'A';
var _A = '';
// Array
var numList = [1, 23];
var stringList = ['1', ' 0'];
var objList = [{}];
console.log('objList', objList);
// Tuple:已知类型数目固定的数组，类型可以不同
var tupleA;
tupleA = [2, 2, ''];
// enum枚举，一种比数字表达更好的表达方式
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
var c = Color.Red;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 2] = "Red";
    Color2[Color2["Green"] = 3] = "Green";
    Color2[Color2["Yellow"] = 4] = "Yellow";
})(Color2 || (Color2 = {}));
// Unknown
/**
 * 1.只有在判断类型后才能将unknown 类型赋值给具体类型,
 * 2. 任何值都可以赋值给unKnown类型的变量
 * 3. unKnown类型不能进行调用任何类型的方法
 */
var notSure = 8;
notSure = true;
notSure = 'string';
function testUnknown() {
    // let num: number = notSure;
    // let str: string = notSure;
    if (typeof notSure === 'number') {
        var aNum = notSure;
    }
}
//Any
/**
 * 1.可以调用任意类型的方法
 * 2. 也可以将其赋值给其他类型的变量
 */
var looselyType = '';
looselyType.push('1');
var anyNumber = looselyType;
var anyNUll = looselyType;
/**
 *void 一般只能赋值undefined null
 */
var voidVar = undefined;
voidVar = null;
