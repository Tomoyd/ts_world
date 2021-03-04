/**
 * 参数装饰器：
 * declare type ParameterDecorator=(target:Object,
 * pKey:string|symbol,paramterIndex:number)=>void;
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function LogParameter(target, key, parameterIndex) {
    var methodName = key || target.prototype.constructor.name;
    console.log("this parameter in position " + parameterIndex + " at " + methodName + " has been decorated");
}
var Cat = /** @class */ (function () {
    function Cat(name) {
    }
    Cat = __decorate([
        __param(0, LogParameter)
    ], Cat);
    return Cat;
}());
var cat = new Cat("tom");
