/**
 * 方法修饰器
 * declare type MethodDecorator =<T>(target:Object,
 * propertyKey:string|symbol,descriptor:TypePropertyDescriptor<T>)=>TypePropertyDescriptor<T>|void
 */
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };

function LogOutput(tarage, key, descriptor) {
  var originalMethod = descriptor.value;
  var newMethod = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var result = originalMethod.apply(this, args);
    if (!this.loggedOutput) {
      this.loggedOutput = new Array();
    }
    this.loggedOutput.push({
      method: key,
      parameters: args,
      output: result,
      timestamp: new Date()
    });
    return result;
  };
  descriptor.value = newMethod;
}
var Calculator = /** @class */ (function () {
  function Calculator() {}
  Calculator.prototype.double = function (num) {
    return num * 2;
  };
  __decorate([LogOutput], Calculator.prototype, "double", null);
  return Calculator;
})();
var calc = new Calculator();
calc.double(11);
// console ouput: [{method: "double", output: 22, ...}]
console.log(calc.loggedOutput);
