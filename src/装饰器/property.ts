/**
 * 属性装饰器  PropertyDecorator
 * declare type PropertyDecorator=(target:Object,
 * propertyKey:string|Symbol)=>void;
 */

function logProperty(target: any, key: string) {
  delete target[key];
  const tempKey = `_${key}`;
  Object.defineProperty(target, tempKey, {
    configurable: true,
    enumerable: false,
    writable: true
  });

  Object.defineProperty(target, key, {
    configurable: true,
    enumerable: true,
    get() {
      return this[tempKey];
    },
    set(val: any) {
      this[tempKey] = val + "_set";
    }
  });
}

class Person {
  @logProperty
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const man = new Person("John");

console.log(man.name);
