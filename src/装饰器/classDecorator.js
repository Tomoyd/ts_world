var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * 类修饰器声明
 * declare type ClassDecorator=<TFunction extends Function>(
 *  target:TFunction
 * )=>TFunction|void;
 *
 */
function Print(target) {
    target.prototype.sayHello = function () {
        console.log("hello");
    };
}
function PrintWithParam(msg) {
    return function (target) {
        target.prototype.sayHello = function () {
            console.log(msg);
        };
    };
}
var Say = /** @class */ (function () {
    function Say() {
    }
    Say = __decorate([
        Print,
        PrintWithParam("张三")
    ], Say);
    return Say;
}());
var say = new Say();
say.sayHello();
// say.sayMsg();
