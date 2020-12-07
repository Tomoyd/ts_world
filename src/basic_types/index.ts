// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 10;
let hex: number = 0xff00d0;
let binary: number = 0b110;
let octal: number = 0o74;
let big: bigint = 1000n;

// String
let a: string = 'A';
let _A: string = '';

// Array
let numList: number[] = [1, 23];
let stringList: string[] = ['1', ' 0'];
let objList: Array<object> = [{}];

console.log('objList', objList);

// Tuple:已知类型数目固定的数组，类型可以不同
let tupleA: [number, number, string];
tupleA = [2, 2, ''];

// enum枚举，一种比数字表达更好的表达方式
enum Color {
  Red,
  Green,
  Yellow,
}

let c2: Color = Color.Red;
enum Color2 {
  Red = 2,
  Green,
  Yellow,
}

// Unknown
/**
 * 1.只有在判断类型后才能将unknown 类型赋值给具体类型,
 * 2. 任何值都可以赋值给unKnown类型的变量
 * 3. unKnown类型不能进行调用任何类型的方法
 */
let notSure: unknown = 8;
notSure = true;
notSure = 'string';
function testUnknown() {
  // let num: number = notSure;
  // let str: string = notSure;
  if (typeof notSure === 'number') {
    let aNum: number = notSure;
  }
}

//Any
/**
 * 1.可以调用任意类型的方法
 * 2. 也可以将其赋值给其他类型的变量
 */

let looselyType: any = '';
looselyType.push('1');
let anyNumber: number = looselyType;
let anyNUll: null = looselyType;

/**
 *void 一般只能赋值undefined null
 */
let voidVar: void = undefined;
// strictNullChecks true下 不可
// voidVar = null;

/**
 * Null Undefined:不能赋值为其他值
 * strictNullChecks 模式下只能将声明undefined null的除了本身赋值给any类型和unknown类型的
 */

let u: undefined = undefined;
let n: null = null;

// Never类型
/**
 * 表示此类型的值不会发生
 * 1. 发生异常 或者无限循环的函数
 * 2. 类型安全：如果Never发生则代表出错了
 */

function error(message: string): never {
  throw new Error(message);
}
function infiniteLoop(): never {
  while (true) {}
}

function effectCase(ca: string) {
  switch (ca) {
    case 'a':
      break;
    case 'b':
      break;
    default:
      return error('');
  }
}

// object  非基本类型 number string boolean undefined bigint null symbol

declare function createObj(o: object): void;

// createObj(null); // 严格模式下不可以
createObj({});
createObj([]);

// 类型断言
/**
 * 1. as语法
 * 2. 单括号表示法
 */

let someValue: unknown = 'this is string';
let strLen: number = (someValue as string).length;
strLen = (<string>someValue).length;
