/**
 * 参数装饰器：
 * declare type ParameterDecorator=(target:Object,
 * pKey:string|symbol,paramterIndex:number)=>void;
 */

function LogParameter(target: Function, key: string, parameterIndex: number) {
  let methodName = key || target.prototype.constructor.name;
  console.log(
    `this parameter in position ${parameterIndex} at ${methodName} has been decorated`
  );
}

class Cat {
  constructor(@LogParameter name: string) {}
}

const cat = new Cat("tom");
