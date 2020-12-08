/**
 * TS的一个核心原则是类型检测关注值的形状结构
 * 有时被称为：duck typing,或者structural subtyping(结构子类型)
 * interface 就是用来命名结构化子类型或鸭子类型的，
 * 接口是项目内或者项目外 在代码中定义契约的强大方式
 */

interface LabelValue {
  label: string;
}

function printLabel(labelObj: LabelValue) {
  console.log(labelObj.label);
}

let myObj = { size: 10, label: 'size 10 Obj' };

printLabel(myObj);

// optional Properties  ?

interface SquareConfig {
  readonly color?: string;
  width: number;
  height?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'red', area: 100 };

  if (config.color) {
    newSquare.color = config.color;
  }

  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

// 字面量多余属性检测
createSquare({ color: 'white', width: 200, height: 200, i: 1 } as SquareConfig);

// 变量子类型即可避免多余属性检测，因为传入变量，不会对多余属性进行检测
let sc = { color: 'blue', width: 20, i: 20 };

createSquare(sc);

// 剩余属性参数,逃避多余属性检测

interface SquareConfigRest {
  color?: string;
  width?: number;
  [propName: string]: any;
}

/**
 * Function Types
 */

interface SearchFunc {
  (source: string, substr: string): boolean;
}

let myFunc: SearchFunc = function (src: string, sub: string) {
  return src.search(sub) > -1;
};

/**
 * 索引类型 indexable types
 */

interface StringArray {
  [index: number]: string;
}
let myArr: StringArray;
myArr = ['Bob', 'Ann'];

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: number;
}

// 数字索引必须是字符串索引的子类型,因为JavaScript进行数字属于是会将其先转为string
interface Okay {
  [x: string]: Animal;
  [x: number]: Dog;
}

// 字符串索引会匹配所有的情况，所有如果在应将其索引到的类型其他类型都是他的子类型
interface NumberOrStringDictionary {
  length: number; // ok, length is a number
  name: string; // ok, name is a string
  readonly [index: string]: number | string;
}

// Class Types
/**
 * 实现一个接口
 */

interface Clock {
  currentType: Date;
  setTime(d: Date): void;
}

class MyClock implements Clock {
  currentType: Date = new Date();
  constructor(h: number, m: number) {}
  setTime(d: Date): void {
    this.currentType = d;
  }
}

// 静态部分实例部分

interface ClockConstructor {
  new (hour: number, m: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}
// 不能直接实现有构造器签名的接口，因为构造器属于类的静态部分不会被检测
// class StaticNew implements ClockConstructor {
//   constructor(hour: number, m: number) {}
// }
class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick(): void {
    throw new Error('Method not implemented.');
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('tick tock');
  }
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}
// 从而检测是否有错误的构造函数签名
let digital = createClock(DigitalClock, 12, 13);
let analog = createClock(AnalogClock, 1, 2);

/**
 * 继承
 * 1.接口也可以继承接口从而起到合并的效果
 * 2.可以继承多个
 */

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLen: number;
}

let shape1: Shape = { color: 'red' };

let square1: Square = { color: 'white', sideLen: 1 };

interface PenStroke extends Shape, Square {
  height: number;
}

//混合类型  例如即是函数又是对象

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = function (start: number) {} as Counter;
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}

//接口也可继承类
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}
