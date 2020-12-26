function addNum(x: number, y?: number): number {
  return x;
}
addNum(1, 2);

const myAdd = (x: number, y: number): number => {
  return x + y;
};

const myAddB: (x: number, y: number) => number = function (
  x: number,
  y: number,
) {
  return x + y;
};
const myAdd2: (x: number, y: number) => number = function (x, y) {
  return x + y;
};

// 可选参数与默认值,
// 有指定默认值则必是可选的

const buildName = (firstName: string, lastName: string = '张三') => {
  return firstName + lastName;
};

buildName('李四');

const buildName1 = (firstName: string, lastName?: string) => {
  return firstName + lastName;
};

buildName1('李四');

function restFunc(...name) {}
// 扩展参数
function buildRestName(firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ');
}
buildRestName('张三丰', '二丰', '一丰');

// this and arrow function:this:void

let deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  creatCardPicker: function () {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

class Handler {
  info: string;
  onClickBad(this: Handler, e: Error) {
    this.info = e.message;
  }
}
