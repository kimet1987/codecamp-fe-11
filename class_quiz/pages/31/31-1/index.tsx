import { useCallback, useMemo, useState } from "react";
import ChildPage from "./child";

export default function MemoPage() {
    let countLet = 0;
    const [count, setCount] = useState(0);

    const onLet = useCallback(() => {
        console.log(countLet + 1);
        countLet += 1;
    }, []);

    const memoCount = useMemo(() => {
        return () => {
            setCount((prev) => prev + 1);
        };
    }, []);

    // const onState = () => {
    //     //console.log(count + 1);
    //     setCount((aaa) => aaa + 1);
    // };

    return (
        <>
            <div>
                <span>카운트(let) : {countLet}</span>
                <button onClick={onLet}>1+</button>
            </div>
            <div>
                <span>카운트(state) : {count}</span>
                <button
                    onClick={useMemo(() => {
                        return () => {
                            setCount((prev) => prev + 1);
                        };
                    }, [])}
                >
                    1+
                </button>
            </div>
            <ChildPage />
        </>
    );
}
