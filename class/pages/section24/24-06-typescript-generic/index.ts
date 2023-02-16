// 1. 문자/ 숫자 / 불린 (primitive) 타입

import { useState } from "react";

export const getPrimitive = (
  arg1: string,
  arg2: number,
  arg3: boolean
): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};
const result = getPrimitive("철수", 1234, true);

//
// 1. any 타입 => 자바스크립트랑 같음

const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  //console.log(arg1 * 1000); ==> 오류발생 안함
  return [arg3, arg2, arg1];
};
const result = getAny("철수", 1234, true);

// 1. unknown 타입

const getUnknown = (
  arg1: unknown,
  arg2: unknown,
  arg3: unknown
): [unknown, unknown, unknown] => {
  // console.log(arg1 * 1000); ==> 오류 발생
  return [arg3, arg2, arg1];
};
const result = getUnknown("철수", 1234, true);

// 1. generic 타입 => return 타입을 알수 가 있다

function getGeneric<Mytype1, Mytype2, Mytype3>(
  arg1: Mytype1,
  arg2: Mytype2,
  arg3: Mytype3
): [Mytype3, Mytype2, Mytype1] {
  return [arg3, arg2, arg1];
}
const result = getGeneric<string, string, string>("철수", 1234, true);

// const [count, setCount] = useState<number>()  Generic 사용처

function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}
const result = getGeneric2<string, string, string>("철수", 1234, true);

function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
const result = getGeneric3<string, string, string>("철수", 1234, true);

// 1. generic 타입 => return 타입을 알수 가 있다

const getGeneric4 = <Mytype1, Mytype2, Mytype3>(
  arg1: Mytype1,
  arg2: Mytype2,
  arg3: Mytype3
): [Mytype3, Mytype2, Mytype1] => {
  return [arg3, arg2, arg1];
};
const result = getGeneric4<string, string, string>("철수", 1234, true);
