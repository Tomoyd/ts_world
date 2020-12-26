function padLeft(value: string, padding: number | string) {
  switch (typeof padding) {
    case 'number':
      return `${padding}` + value;
    case 'string':
      return padding + value;
    default:
      throw new Error(`Expected string or number,got '${typeof padding}'`);
  }
}

// 联合公共的字段，非公共的字段将被认为非法，

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs();
// Property 'swim' does not exist on type 'Bird | Fish'.
//   Property 'swim' does not exist on type 'Bird'
// pet.swim();
// 对于公共字段的聚合这种方式可以使用switch，进行穷尽检测

interface LoadingState {
  state: 'loading';
}
interface FailedState {
  state: 'failed';
}
interface SuccessState {
  state: 'success';
}

function Exhaustiveness(pageState: LoadingState | FailedState | SuccessState) {
  switch (pageState.state) {
    case 'loading':
      return;
    case 'failed':
      return;
    case 'success':
      return;
    default:
      return;
  }
}
// intersection Types  交叉类型 将多个类型合并为一个

interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

interface ArtistsData {
  artists: { name: string }[];
}
