/**
 * 类修饰器声明
 * declare type ClassDecorator=<TFunction extends Function>(
 *  target:TFunction
 * )=>TFunction|void;
 *
 */
function Print(target: Function) {
  target.prototype.sayHello = function () {
    console.log("hello");
  };
}

function PrintWithParam(msg: string) {
  return (target: Function) => {
    target.prototype.sayHello = () => {
      console.log(msg);
    };
  };
}

// 放在上面的优先级会高，会覆盖下面的
@Print
@PrintWithParam("张三")
class Say {
  constructor() {}
}

const say: Say = new Say();
say.sayHello();
// say.sayMsg();
