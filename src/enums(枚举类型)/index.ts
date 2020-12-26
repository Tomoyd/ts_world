enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

enum UserResponse {
  No = 0,
  Yes = 1,
}

let no = UserResponse.No;
let nameOfNo = UserResponse[no];
//  环境枚举用于描述已经存在的枚举类型的形状结构 不会被编译到JS中
declare enum Enum {
  A = 1,
  B,
  C = 2,
}

// console.log('Enum.B', Enum.A);
