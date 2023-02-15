import type { FocusEvent } from "react";
export const wrapAsync = (비동기함수: () => Promise<void>) => () => {
    void 비동기함수();
};

export const wrapFormAsync =
    (비동기함수: () => Promise<void>) => (e: FocusEvent<HTMLFormElement>) => {
        e.preventDefault();
        비동기함수();
    };
