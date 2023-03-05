import type { FocusEvent } from "react";
export const wrapAsync = (비동기함수: () => Promise<void>) => () => {
  void 비동기함수();
};

export const wrapFileAsync =
  (비동기함수: (event: any) => Promise<void>) => () => {
    void 비동기함수(event);
  };

export const wrapFormAsync =
  (비동기함수: () => Promise<void>) => (e: FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    void 비동기함수();
  };

// 이벤트에 따라 타입변환 되는 함수
export const wrapEventAsync =
  <E>(비동기함수: (e: E) => Promise<void>) =>
  (e: E) => {
    void 비동기함수(e);
  };
