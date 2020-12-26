//泛型

function identity(num: number): number {
  return num;
}

// 传入什么类型，则返回什么类型====利用泛型实现

function identityGeneric<T>(arg: T): T {
  return arg;
}

identityGeneric('ss');

function loggingIdentity<T>(arg: T[]): T[] {
  console.log('arg', arg.length);
  return arg;
}

let myLogging: <Y>(a: Y[]) => Y[] = loggingIdentity;

interface GenericIdentity<T> {
  name(arg: T): T;
}

let aFun: GenericIdentity<string> = {
  name: function (first: string) {
    return first;
  },
};
// 泛型类

class CGeneric<T> {
  value: T;
  add(x: T, y: T): T {
    return y;
  }
}

//
function create<T>(c: { new (): T }): T {
  return new c();
}

create<Object>(Object);
