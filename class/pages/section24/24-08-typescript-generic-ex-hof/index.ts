// 1. HOF - 일반함수
function first<T>(arg1: T) {
  return function second<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}
const result = first("영희")(9);

const first2 =
  <T>(arg1: T) =>
  <U>(arg2: U): [T, U] => {
    return [arg1, arg2];
  };
const result2 = first2("영희")(9);

const 로그인체크 =
  <C>(Component: C) =>
  <P>(Props: P): [C, P] => {
    return [Component, Props];
  };
const result3 = 로그인체크("영희")(9);
