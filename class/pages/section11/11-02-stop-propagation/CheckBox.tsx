import { MouseEvent } from "react";

export default function CheckBox() {
    const qqq2 = (e: MouseEvent<HTMLDivElement>) => {
        alert("2번 클릭");
    };
    const qqq3 = (e: MouseEvent<HTMLDivElement>) => {
        event?.stopPropagation();
        alert("3번 클릭");
    };
    return (
        <span onClick={qqq2}>
            <input type="checkbox" onClick={qqq3} />
        </span>
    );
}
