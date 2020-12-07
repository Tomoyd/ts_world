// 类型推断：Types by Inference

let hw = 'Hello world';
const num1: number = 0;

// 类型定义
const user = { name: 'hw', age: 18 };
interface User {
  name: String;
  age: Number;
}

const tUser: User = {
  name: '',
  age: 12,
};

// 组合类型：联合和泛型

/**
 * 联合类型 定义一个由其他类型组合的方式
 */

type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9;
type WindowStates = 'active' | 'inactive' | 'close';
type LockStates = 'locked' | 'unlocked';

function isEmpty(entry: string | any[]): boolean {
  return entry.length === 0;
}
isEmpty([]);
isEmpty('12');

function wrapInArray(entry: string | string[]) {
  if (Array.isArray(entry)) {
    return entry;
  }
  return [entry];
}

/**
 * 泛型
 */

type StringList = Array<String>;
type NumberList = Array<Number>;
type ObjectList = Array<{ name: string }>;

interface Background<T> {
  add: (t: T) => void;
  types: Array<T>;
}

const background: Background<string> = {
  add: (name) => {
    background.types.push(name);
  },
  types: ['red'],
};
background.add('blue');

//结构化类型系统：鸭子类型系统  typescript一个核心的原则是类型检测关注与值所拥有的形状结构
interface Point {
  x: number;
  y: number;
}
const printPoint = (p: Point) => {
  console.log('p.', { x: p.x, y: p.y });
};

const point = { x: 1, y: 2 };
// point 的结构形状与Point是一样的，所有被认为是一个相同类型
printPoint(point);

//且检测只关注对象的字段的子集是否匹配，只要对于入参类型有完全匹配的字段，就可以认为是相同类型
const point3 = { x: 1, y: 1, z: 3 };
printPoint(point3);

// 形状检测系统在类与对象是没有区别的

class VPoint {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

printPoint(new VPoint(1, 3));
