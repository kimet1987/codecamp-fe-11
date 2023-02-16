import { MouseEvent, useState } from "react";

// interface IUseCount {
//     onClickCountUp: () => () => void;
//     count: number;
// }

export const useCount = () => {
    const [count, setCount] = useState(0);

    const onClickCountUp = () => {
        setCount((prev) => prev + 1);
    };
    return {
        onClickCountUp,
        count,
    };
};
