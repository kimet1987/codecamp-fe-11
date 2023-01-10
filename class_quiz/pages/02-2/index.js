import { useState } from "react";

export default function change() {
    const [add, setAdd] = useState(0);
    function onChange() {
        let aaa = document.getElementById("aaa");
        aaa.innerText = Number(aaa.innerText) + 1;
    }
    // function onChange() {
    //     setAdd(add + 1);
    // }

    return (
        <div>
            <span id="aaa">{add}</span>
            <button id="aaa" onClick={onChange}>
                카운트 증가
            </button>
        </div>
    );
}
