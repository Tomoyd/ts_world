// literal narrowing 文字限制修改
const helloWorld = 'hello world';

let hiWorld = 'hi';

// 有限的情况： finite

type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    switch (easing) {
      case 'ease-in':
        console.log(`dx${dx}dy:${dy}easing:${easing}`);
        break;
      case 'ease-out':
        console.log(`dx${dx}dy:${dy}easing:${easing}`);
        break;
      default:
        console.log(`dx${dx}dy:${dy}easing:${easing}`);
        break;
    }
  }
}

const btn = new UIElement();
btn.animate(1, 1, 'ease-out');
btn.animate(12, 1, 'ease-in-out');

// 文本文字类型

type RollType = 1 | 2 | 3 | 4;

function rollDice(): RollType {
  return 1;
}
