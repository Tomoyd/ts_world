export function A() {
  console.log('123', 123);
}
export function B() {
  console.log('123B', 123);
}
const add = (a, b) => {
  return a + b;
};
const currentIndex = add(9, 20);

console.log(currentIndex);
console.log("currentIndex111");
