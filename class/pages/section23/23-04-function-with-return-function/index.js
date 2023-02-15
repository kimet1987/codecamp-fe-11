// 1. 함수를 리턴하는 함수
// function aaa() {
//   const apple = 10;

//   return function bbb() {
//     const banana = 20;
//     console.log(banana);
//     console.log(apple);
//   };
// }
// aaa()();

// 2. 함수를 리턴하는 함수
// function aaa(apple) {
//   return function bbb(banana) {
//     console.log(banana);
//     console.log(apple);
//   };
// }
// aaa(100)(500);

// 3. 함수를 리턴하는 함수
const bbb = (apple) => (banana) => {
  console.log(banana);
  console.log(apple);
};

// 4. 함수를 리턴하는 함수 - 인자 여러기
const ccc = (apple) => (banana) => (tomato) => (orange) => {
  console.log(banana);
  console.log(apple);
  console.log(tomato);
  console.log(orange);
};
