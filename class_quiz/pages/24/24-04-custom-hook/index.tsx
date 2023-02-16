import { useState } from "react";
import { useCount } from "./hook";

export default function QuizPage(): JSX.Element {
    const { onClickCountUp, count } = useCount();
    return (
        <>
            <div>
                <p>지금의 카운트는 {count} 입니다!</p>
                <button onClick={onClickCountUp}>Count up!</button>
            </div>
        </>
    );
}
